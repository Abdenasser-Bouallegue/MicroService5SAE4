import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../services/absence.service';
import { Absence } from '../model/Absence';

@Component({
  selector: 'app-all-absences',
  templateUrl: './all-absences.component.html',
  styleUrls: ['./all-absences.component.css']
})
export class AllAbsencesComponent implements OnInit {
  absences: Absence[] = [];

  constructor(private absenceService: AbsenceService) {}

  ngOnInit(): void {
    this.getAllAbsences();
  }

  getAllAbsences(): void {
    this.absenceService.getAllAbs().subscribe(
      (data) => {
        this.absences = data;
      },
      (error) => {
        console.error('Error fetching absences', error);
      }
    );
  }

  deleteAbsence(absence: Absence): void {
    // Confirm deletion with the user
    const confirmation = window.confirm('Are you sure you want to delete this absence?');

    if (confirmation) {
      this.absenceService.deleteAbs(absence).subscribe(
        () => {
          this.absences = this.absences.filter(a => a.id !== absence.id);
        },
        (error) => {
          console.error('Error deleting absence', error);
        }
      );
    }
  }
}
