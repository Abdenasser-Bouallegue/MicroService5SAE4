import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbsenceService } from '../services/absence.service';
import { Absence } from '../model/Absence';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.css']
})
export class AddAbsenceComponent {
  absenceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private absenceService: AbsenceService
  ) {
    this.absenceForm = this.fb.group({
      iduser: [0, Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      registrationNumber: ['', Validators.required],
      claase: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  onSubmit(): void {
    if (this.absenceForm.valid) {
      const absence: Absence = this.absenceForm.value;
      this.absenceService.addAbs(absence).subscribe(
        response => {
          console.log('Absence added successfully:', response);
          this.absenceForm.reset();
        },
        error => {
          console.error('Error adding absence:', error);
        }
      );
    }
  }
}
