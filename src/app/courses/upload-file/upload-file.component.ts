import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MediaSource } from 'src/app/model/media-source';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  @Input("chapterId") chapterId: string;
  mediaSource: MediaSource;
  uploadForm: FormGroup;
  file: File;

  constructor(
    private _api: GlobalApiService,
    private formBuilder: FormBuilder
  ){
    this.uploadForm = this.formBuilder.group({
      context: '',
      type: '',
      file: ''
    });
  }

  fileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('context', this.uploadForm.get('context')!.value)
    formData.append('type', this.uploadForm.get('type')!.value)
    formData.append('file', this.file);

    this._api.addResourceToChapter(
        this.chapterId,
        formData
      ).subscribe(
      (response) => {
        console.log(response);
        // Handle success
      },
      (error) => {
        console.log(error);
        // Handle error
      }
    );
  }

}
