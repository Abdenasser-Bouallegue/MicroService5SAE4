import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../../models/chat';
import { UserService } from '../../Services/user.service';
import { ChatService } from '../../Services/chat.service';
import { User } from 'src/app/core/models/User';
import { User2 } from '../../models/User2';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public alluser: any = [];
  userData: User2[] = [];

  check = sessionStorage.getItem('username');
  chatId: any = 0;
  chatObj: Chat = new Chat();
  public chatData: any = [];

  constructor(private router: Router, private userService: UserService
    
    , private chatService: ChatService) { }

  ngOnInit(): void {
    let all = setInterval(() => {
      this.userService.GetlistUser()
      .pipe(
        map((res: any) => res.map((user: any) => user.firstname))
      )
      .subscribe({
        next: (firstNames: string[]) => {
          this.alluser = firstNames;
          console.log(this.alluser);
        },
        error: (error) => {
          console.error('Error:', error);
        }
    
      })
      // this.userService.getAll().subscribe((data) => {
      //    console.log(data);
         
      //   this.alluser = data;
      // })
    }, 1000);
  }

  
  goToChat(username: any) {
    this.chatService.getChatByFirstUserNameAndSecondUserName(username, sessionStorage.getItem("username")).subscribe(
      (data) => {
        this.chatId = data.chatId;
        sessionStorage.setItem("chatId", this.chatId);

        sessionStorage.setItem("gotochat", "false");
        this.router.navigateByUrl('/chat');
      },
      (error) => {
        if (error.status == 404) {
          this.chatObj.firstUserName = sessionStorage.getItem("username");
          this.chatObj.secondUserName = username;
          this.chatService.createChatRoom(this.chatObj).subscribe(
            (data) => {
              this.chatData = data;
              this.chatId = this.chatData.chatId;
              sessionStorage.setItem("chatId", this.chatData.chatId);

              sessionStorage.setItem("gotochat", "false");
              this.router.navigateByUrl('/chat');
            })
        } else {

        }
      });

}
}
