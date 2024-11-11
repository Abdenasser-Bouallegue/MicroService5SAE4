import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { ITypeForum } from '../interf/forum.interface';
import { ForumService } from '../services/forum.service';
import { FeedbackService } from '../services/feedback.service';
import { ITypeFeedback } from '../interf/feedback.interface';
import { AbsenceService } from '../services/absence.service';
import { ITypeAbsence } from '../interf/absence.interface';
import { LessonService } from '../services/lesson.service';
import { ITypeLesson } from '../interf/lesson.service';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  chart: any;
  chartBar: any; 
  chartBarA: any; 
  chartPol:any;
  


  constructor( private router: Router, private route: ActivatedRoute,private forumService: ForumService, private feedbackService:FeedbackService,private absenceService:AbsenceService,private lessonService:LessonService) { 
  }


     ngOnInit(): void {
      console.log("test");
      this.createChart();
    
      this.createChartBar();
      this.createChartBarA();
      this.createChartPol();
      this.getforumbydate();
      this.getRecbyCategory();
      this.getAbSbyDate ();
      this.getLessonBySubj();


    }

    
    createChartBar(){
  
      this.chartBar = new Chart("MyChartBar", {
        type: 'bar', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: [ ], 
           datasets: [
            {
              label: "",
              data: [],
              backgroundColor: ['blue', 'limegreen', 'orange', 'purple', 'yellow']
            },
            {
              label: "",
              data: [],
              backgroundColor: 'limegreen'
            }  
          ]
        },
        options: {
          aspectRatio:2.5
        }
        
      });
    }

  
    createChartBarA(){
  
      this.chartBarA = new Chart("MyChartBarA", {
        type: 'doughnut', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: [ ], 
           datasets: [
            {
              label: "",
              data: [],
              backgroundColor:  ['blue', 'limegreen', 'orange', 'purple', 'yellow']
            },
            {
              label: "",
              data: [],
              backgroundColor: 'limegreen'
            }  
          ]
        },
        options: {
          aspectRatio:2.5
        }
        
      });
    }
    createChart(){
  
      this.chart = new Chart("MyChart", {
        type: 'line', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: [ ], 
           datasets: [
            {
              label: "",
              data: [],
              backgroundColor: 'blue'
            },
            {
              label: "",
              data: [],
              backgroundColor: 'limegreen'
            }  
          ]
        },
        options: {
          aspectRatio:2.5
        }
        
      });
    }

    createChartPol(){
  
      this.chartPol = new Chart("MyChartPol", {
        type: 'doughnut', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: [ ], 
           datasets: [
            {
              label: "",
              data: [],
              backgroundColor: ['blue', 'limegreen', 'orange', 'purple', 'yellow']
            },
            {
              label: "",
              data: [],
              backgroundColor: 'limegreen'
            }  
          ]
        },
        options: {
          aspectRatio:2.5
        }
        
      });
    }

    getLessonBySubj() {
      this.lessonService.getLessonBySubj().subscribe(
        (data) => {
          data.forEach((typeCount: ITypeLesson) => {
            console.log(typeCount.chiffr);
            console.log(typeCount.subject);
            this.chartPol.data.datasets[0].data.push(typeCount.chiffr); // Push count to the first dataset's data array
            this.chartPol.data.labels.push(typeCount.subject); // Push date to labels array
          });
          this.chartPol.update(); // Update the chart after adding data
        },
        (error) => {
          console.error(error);
        }
      ); }


    getforumbydate() {
      this.forumService.countforumbydate().subscribe(
        (data) => {
          data.forEach((typeCount: ITypeForum) => {
            console.log(typeCount.count);
            console.log(typeCount.date);
            this.chart.data.datasets[0].data.push(typeCount.count); // Push count to the first dataset's data array
            this.chart.data.labels.push(typeCount.date); // Push date to labels array
          });
          this.chart.update(); // Update the chart after adding data
        },
        (error) => {
          console.error(error);
        }
      ); }

      getRecbyCategory() {
      this.feedbackService.countRecbyCategory().subscribe(
        (data) => {
          data.forEach((typeCount: ITypeFeedback) => {
            console.log(typeCount.chiffre);
            console.log(typeCount.reclamationCategory);
            this.chartBar.data.datasets[0].data.push(typeCount.chiffre); 
            this.chartBar.data.labels.push(typeCount.reclamationCategory); 
          });
          this.chartBar.update(); 
        },
        (error) => {
          console.error(error);
        }
      );}

      getAbSbyDate() {
        this.absenceService.countAbsbyDate().subscribe(
          (data) => {
            data.forEach((typeCount: ITypeAbsence) => {
              console.log(typeCount.chiff);
              console.log(typeCount.date);
              this.chartBarA.data.datasets[0].data.push(typeCount.chiff); 
              this.chartBarA.data.labels.push(typeCount.date); 
            });
            this.chartBarA.update(); 
          },
          (error) => {
            console.error(error);
          }
        );}
    




    

}