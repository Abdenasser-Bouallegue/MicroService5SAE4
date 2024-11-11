import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api:AuthenticationService,
    private router:Router
    ){}

  logout(){
    this.api.logout()
    this.router.navigate(['/home'])
  }
}
