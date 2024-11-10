import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/model/chapter';
import { MediaSource } from 'src/app/model/media-source';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.css']
})
export class ChapterDetailsComponent implements OnInit, AfterViewInit{
  
  chapter: Chapter;
  mediaSources: MediaSource[] = [];
  @ViewChild("videoElement") eVideo: ElementRef;

  
  constructor(
    private route: ActivatedRoute,
    private _api: GlobalApiService
  ){}
  
  ngOnInit(): void {
    this._api
    .getChapterById(this.route.snapshot.paramMap.get("chapterId"))
    .subscribe(chapter => this.chapter = chapter);
  }
  
  ngAfterViewInit(): void {
    this.chapter.resourcesRefList.forEach(
      (resourceContext) => {
        this._api.getResource(resourceContext).subscribe(
          (data) => {
            console.log(data);
            let auxType;
            if(data.body.type.includes("image")) auxType = 'IMAGE';
            if(data.body.type.includes("video")) auxType = 'VIDEO';
            if(data.body.type.includes("pdf")) auxType = 'PDF';
            this.mediaSources.push({
              context: resourceContext,
              type: auxType
            })
          }
        );
      }
    )
  }

  loadResourseRef(resource: MediaSource) {
    console.log(resource);
    let reader = new FileReader();
    let url;
    
    this._api.getResource(resource.context).subscribe(
      (data) => {
        reader.readAsDataURL(data.body);
        url = reader.result;
        url = URL.createObjectURL(data.body);
        resource.url = url;
        this.eVideo.nativeElement.src = url;
      }
    );
  }
}
