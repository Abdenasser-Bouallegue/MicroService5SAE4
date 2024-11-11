import { Component, ElementRef, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { StudentAbsence } from 'src/app/core/models/StudentAbsence';
import { AbsenceService } from 'src/app/core/services/absence.service';
import * as jspdf from 'jspdf';
import { PdfGeneratorService } from 'src/app/core/services/PdfGeneratorService ';

declare var $: any;

@Component({
  selector: 'app-student-absence',
  templateUrl: './student-absence.component.html',
  styleUrls: ['./student-absence.component.css']
})
export class StudentAbsenceComponent {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('table', { static: false }) table: ElementRef;

  signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 300
  };
  studentabsent: any;
  // user:User[];

  constructor(private absenceservice: AbsenceService,
    private pdfGeneratorService: PdfGeneratorService
    ) { }

  ngOnInit(): void {
    this.loadQuests();

  }
  downloadPDF() {
    const filename = 'table_pdf';
    this.pdfGeneratorService.generatePDF(this.table.nativeElement, filename);
  }
  openSignatureModal() {
    $('#signatureModal').modal('show');
  }

  closeSignatureModal() {
    $('#signatureModal').modal('hide');
  }
  saveSignature() {
    const signatureData = this.signaturePad.toDataURL();
    console.log('Signature Data:', signatureData);
    this.closeSignatureModal();
  }
  drawComplete() {
    // Additional logic after drawing is complete
  }
  loadQuests() {
    this.absenceservice.getStudentAbsence()
    .subscribe({
      next: (response) => {
          this.studentabsent = response;
          console.log(this.studentabsent);
          
          
        },
        error:(err)=>{
          alert("Error while fetching the Records !!")
        } 
       
    });
 
  }
}
