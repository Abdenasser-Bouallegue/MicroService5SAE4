import { Component, OnInit } from '@angular/core';
import { Quest } from 'src/app/core/models/Quest';
import { User } from 'src/app/core/models/User';
import { QuestService } from 'src/app/core/services/quest.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit{
  quests: Quest[];
  user:User[];

  constructor(private questService: QuestService,
     private userservice:UserService
    ) { }

  ngOnInit(): void {
    this.loadQuests();
    // this.CurrentUser();

  }

  loadQuests() {
    this.questService.getAllQuests()
    .subscribe({
      next: (response) => {
          this.quests = response;
          
          console.log(this.quests);
          
        },
        error:(err)=>{
          alert("Error while fetching the Records !!")
        } 
       
    });
 
  }
  getAdminPhotoUrl(quest: Quest): string {
    return this.userservice.getPhoto(quest.image);
    
  }
  acceptQuest(idQuest: number): void {
    this.userservice.acceptQuest(idQuest).subscribe({
      next: () => {
        console.log('Quest accepted successfully.');
      },
      error: (error) => {
        console.error('Error accepting quest:', error);
      },complete:()=>this.ngOnInit()
    });
  }
  rejectQuest(id: number): void {
    this.userservice.rejecterQuest(id)
      .subscribe({
        next: () => {
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        },complete:()=>this.ngOnInit()
      });
  }
 
}
