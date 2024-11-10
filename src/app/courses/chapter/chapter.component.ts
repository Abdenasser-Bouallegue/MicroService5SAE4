import { Component, Input } from '@angular/core';
import { Chapter } from 'src/app/model/chapter';

@Component({
  selector: 'chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {
  @Input("chapter")
  chapter: Chapter;

  @Input() index: number;
  isSelected: boolean = false;

  toggleAccordion(): void {
    this.isSelected = !this.isSelected;
  }
}
