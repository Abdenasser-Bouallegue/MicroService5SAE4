import { 
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'scraping-duck',
  templateUrl: './scraping-duck.component.html',
  styleUrls: ['./scraping-duck.component.css']
})
export class ScrapingDuckComponent implements OnInit, AfterViewInit, AfterContentInit {
  
  @Output() closeSignal = new EventEmitter<boolean>();

  isLoaded = false;
  isSpeechLoaded = false;
  speechToLoad = 0;
  countIndex = 0;
  speech: string[] = [
    "hello Teacher, want to create a public event? Let me help you!",
    `I have collected some trending technologies for you to explore\\maybe this will give you some ideas on what to make the event about`
  ]

  @ViewChild("speechBubble") speechBubble: ElementRef;


  constructor(
    private _api: GlobalApiService
  ){}


  ngAfterContentInit(): void {
    this.isLoaded = true;
    
    this.loadSpeech()  
  }

  ngOnInit(): void {
    this._api.getScrapping().subscribe(
      (data) => {
        console.log(data);
        
        let aux = `here are some topics that might interrest you\\`
        data.forEach((tech) => {aux += tech.label + "\\"});
        this.speech.push(aux);
      }
    )
    console.log(this.speech);
    
  }


  ngAfterViewInit(): void {
    
    
  }

  close(value: boolean) {
    this.closeSignal.emit(value);
  }

  loadSpeech(){
    setInterval(()=>{
      if(this.countIndex < this.speech[this.speechToLoad].length) {
        if(this.speech[this.speechToLoad][this.countIndex] == "\\") {
          this.speechBubble.nativeElement.innerHTML += "<br>"
        }else{
          this.speechBubble.nativeElement.innerHTML += this.speech[this.speechToLoad][this.countIndex]
        }
        this.countIndex++
      }
    }, 15);

    setTimeout(() => {
        this.isSpeechLoaded = true;
    }, 500);
  }

  nextSpeech() {
    if(this.speechToLoad < this.speech.length) {
      this.speechToLoad++;
      this.speechBubble.nativeElement.innerHTML = "";
      this.isSpeechLoaded = false;
      this.loadSpeech();
      this.countIndex = 0;
    }
  }

}
