import { Component } from '@angular/core';
import { SeachService } from 'src/app/services/seach.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  seachValue: string;

  constructor(
      private searchService: SeachService
    ) {}

  sendSearchValue(){
    this.searchService.setData(this.seachValue);
  }
}
