import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model/chapter';

@Component({
  selector: 'chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css']
})
export class ChaptersListComponent implements OnInit{
  @Input("chapters")
  chapters: Chapter[]

  ngOnInit(): void {
  }
}
