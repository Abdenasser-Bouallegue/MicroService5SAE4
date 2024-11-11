import { Component, NgZone } from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Chat } from '../../models/chat';
import { Message } from '../../models/message';
import { map } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  chatForm: FormGroup;
  chatObj: Chat = new Chat();
  messageObj: Message = new Message();
  // chatId: number = 22;
  public messageList: any = [];
  public chatList: any = [];
  replymessage: String = "checking";
  public chatData: any;
  msg = "Good work";
  chatId: any = sessionStorage.getItem('chatId');
  color = "";
  secondUserName = "";
  public alluser: any = [];
  check = sessionStorage.getItem('username');
  timesRun = 0;
  timesRun2 = 0;
  badWords: string[] =["abortion", "bloody", "bum", "crap"];
  inputMessage: string = '';
  errbadwords:boolean = false;

  recognition = new (window["SpeechRecognition"] || window["webkitSpeechRecognition"])();
  startButton: any;
  outputDiv: any;



  firstUserName = sessionStorage.getItem('username');
  senderEmail = sessionStorage.getItem('username');
  senderCheck = sessionStorage.getItem('username');

  constructor(private chatService: ChatService, private ngZone: NgZone ,
    private toastr: ToastrService,
  
    private router: Router, 
    private userService: UserService ) {
    this.chatForm = new FormGroup({
      replymessage: new FormControl()
    });
    this.recognition.lang = 'en-US';

  }


  ngOnInit(): void {
    setInterval(() => {
      this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
        this.chatData = data;
        this.messageList = this.chatData.messageList;
        this.secondUserName = this.chatData.secondUserName;
        this.firstUserName = this.chatData.firstUserName;
      });
    }, 1000);
    


    let getByname = setInterval(() => {
      // For getting all the chat list whose ever is logged in.
      this.chatService.getChatByFirstUserNameOrSecondUserName(sessionStorage.getItem('username')).subscribe(data => {
        // console.log(data);
        this.chatData = data;
        this.chatList = this.chatData;
      });

      this.timesRun2 += 1;
      if (this.timesRun2 === 2) {
        clearInterval(getByname);
      }
    }, 1000);

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
      //   // console.log(data);

      //   this.alluser = data;
      // })

      this.timesRun += 1;
      if (this.timesRun === 2) {
        clearInterval(all);
      }
    }, 1000);

    this.startButton = document.getElementById('startButton');
    this.outputDiv = document.getElementById('output');

    this.recognition.onstart = () => {
      this.startButton.textContent = 'Listening...';
  };
  
  this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      this.chatForm.get('replymessage').setValue(transcript);
  };
  
  this.recognition.onend = () => {
      this.startButton.textContent = 'Start Voice';
  };
    
  }

  startRecognition(): void {
    this.recognition.start();
  }
  

  
  loadChatByEmail(event: string, event1: string) {
    console.log(event, event1);
    // For removing the previous chatId
    sessionStorage.removeItem("chatId");

    // For checking the chat room by both the emails , if there is present then it will give the chat Id in sessionStorage
    this.chatService.getChatByFirstUserNameAndSecondUserName(event, event1).subscribe(data => {
      // console.log(data);
      this.chatData = data;
      this.chatId = this.chatData[0].chatId;
      console.log(this.chatId);
      sessionStorage.setItem('chatId', this.chatId)


      setInterval(() => {
        this.chatService.getChatById(this.chatId).subscribe(data => {
          this.chatData = data;
          this.messageList = this.chatData.messageList;
          this.secondUserName = this.chatData.secondUserName;
          this.firstUserName = this.chatData.firstUserName;
        });
      }, 1000)

    });

  }
  containsBadWords(input: string): boolean {
    // Regular expression to match bad words
    const regex = new RegExp(this.badWords.join('|'), 'gi');
    // Check if input message contains bad words
    return regex.test(input);
  }
  sendMessage() {
    console.log(this.chatForm.value);
     // Check if input message contains bad words
     if (this.containsBadWords(this.inputMessage)) {
          
      console.log("Message contains bad words. Submission prevented.");
       this.errbadwords = true; // Set errbadwords flag to true
      return;
    }
    // This will call the update chat method when ever user send the message
    this.messageObj.replymessage = this.chatForm.value.replymessage;
    this.messageObj.senderEmail = this.senderEmail;
    this.chatService.updateChat(this.messageObj, this.chatId).subscribe(data => {
      console.log(data);
      this.chatForm.reset();

      // for displaying the messageList by the chatId
      this.chatService.getChatById(this.chatId).subscribe(data => {
        console.log(data);
        this.chatData = data;
        // console.log(this.chatData.messageList);console.log(JSON.stringify(this.chatData.messageList));
        this.messageList = this.chatData.messageList;
        this.secondUserName = this.chatData.secondUserName;
        this.firstUserName = this.chatData.firstUserName;

      },)
    })
  }

  routeX() {
    // this.router.navigateByUrl('/navbar/recommendation-service');
    sessionStorage.clear();
    // window.location.reload();
    this.router.navigateByUrl('');
  }

  routeHome() {
    this.router.navigateByUrl('');
  }


  goToChat(username: any) {
    this.chatService.getChatByFirstUserNameAndSecondUserName(username, sessionStorage.getItem("username")).subscribe(
      (data) => {
        this.chatId = data.chatId;
        sessionStorage.setItem("chatId", this.chatId);
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
            })
        } else {

        }
      });

  }
  navigateToMain() {
    this.router.navigate(["/"]);
  }
  voice(){
  
  }
}
