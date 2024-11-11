import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private api:UserService, private toastr:ToastrService){}
  userData: User[] = [];
  searchTerm: string = '';

  searchFirstName: string = ''; // Property to store the search input

 
  get filteredUsers() {
    return this.userData.filter(user => user.firstname.toLowerCase().includes(this.searchFirstName.toLowerCase()));
}
  ngOnInit(): void {
    this.GetlistUser();


  }
  convertBlockingToBoolean(blockingValue: string): boolean {
    return blockingValue === "true";
  }
  GetlistUser(){
    this.api.GetlistUser()
    .subscribe({
      next:(res)=>{
        this.userData = res as User[];

        console.log(this.userData)
        
      
      },
      error:(err)=>{
        console.log(err);
        
      }
  
    })
  }
  DeleteUser(id: number): void {
    this.api.DeleteUser(id)
      .subscribe({
        next: () => {
          this.toastr.success('', 'Success!\nUser deleted', {
            timeOut: 3000,
            progressBar: true,
            positionClass: 'toast-top-right'
          });        },
        error: (err) => {
          console.error('Error deleting user:', err);
        },complete:()=>this.ngOnInit()
      });
  }
 

  bloqueUser(id: number): void {
    this.api.bloqueUser(id)
    .subscribe({
      next: () => {
        this.toastr.success('', 'Success!\nUser bloqué', {
          timeOut: 3000,
          progressBar: true,
          positionClass: 'toast-top-right'
        });
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        // Gérer les erreurs de suppression, afficher un message à l'utilisateur, etc.
      },complete:()=>this.ngOnInit()
    });
  }

  debloquerUser(id: number): void {
    this.api.debloqueruser(id)
    .subscribe({
      next: () => {
        this.toastr.success('', 'Success!\nUser debloqué', {
          timeOut: 3000,
          progressBar: true,
          positionClass: 'toast-top-right'
        });      },
      error: (err) => {
        console.error('Error deleting user:', err);
        // Gérer les erreurs de suppression, afficher un message à l'utilisateur, etc.
      },complete:()=>this.ngOnInit()
    });
  }
  filterUserData(): any[] {
    // Filter userData based on search term
    return this.userData.filter(user =>
      user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
 


}
