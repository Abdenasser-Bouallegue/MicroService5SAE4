import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AllUserProfil } from 'src/app/core/models/AllUserProfil';
import { User } from 'src/app/core/models/User';
import { AbsenceService } from 'src/app/core/services/absence.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css']
})
export class ListAbsenceComponent implements OnInit {
  userData: AllUserProfil[] = [];
  searchTerm: string = '';
  selectedUserIds: number[] = [];
  selectedUsers: User[] = [];
  selectedClass: string = ''; // Variable to hold the selected class

  searchFirstName: string = ''; // Property to store the search input

  constructor(private api:UserService,
    private absenceservice :AbsenceService,
    private toastr:ToastrService){}

  get filteredUsers() {
    return this.userData.filter(user => user.firstname.toLowerCase().includes(this.searchFirstName.toLowerCase()));
}
  ngOnInit(): void {
    this.GetlistUser();
    

  }
  logSelectedUsers() {
    console.log("Selected Users:", this.selectedUsers);
  }

  GetlistUser(){
    this.api.getUsersProfil('STUDENT')
    .subscribe({
      next:(res)=>{
        this.userData = res as AllUserProfil[];

        console.log(this.userData)
        
      
      },
      error:(err)=>{
        console.log(err);
        
      }
  
    })
  }
  saveabsence(): void {
    const selectedUsersWithClass = this.filterUserData().map(user => ({
      ...user,
      iduser: user.id, 
      claase: this.selectedClass 
    }));
  
    this.absenceservice.saveSelectedUsers(selectedUsersWithClass)
    .subscribe({
      next: (response) => {
         this.toastr.success('', 'Success!\nListe  saved successfully', {
          timeOut: 3000,
          progressBar: true,
          positionClass: 'toast-top-right'
        });
      },
      error: (err) => {
        this.toastr.success('', 'Success!\nListe  saved successfully', {
          timeOut: 3000,
          progressBar: true,
          positionClass: 'toast-top-right'
        });
      }
    });
    
   
  }
  filterUserData(): any[] {
    // Filter userData based on search term
    return this.userData.filter(user =>
      user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  
  toggleUserSelection(user: User) {
    const index = this.selectedUsers.findIndex(u => u.id === user.id);
    if (index === -1) {
      this.selectedUsers.push(user); // If not found, add the user
    } else {
      this.selectedUsers.splice(index, 1); // If found, remove the user
    }
  }
  

  isUserSelected(user: User): boolean {
    return this.selectedUsers.some(selectedUser => selectedUser.id === user.id);
  }
  
}
