import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public user = { email: '', password: '' }; // Initialize user object here
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(loginForm: any) {
    if (loginForm.invalid) {
      return;
    }

    // Call AuthService login method
    this.authService.login(this.user.email, this.user.password)
      .subscribe(
        () => {
          // Redirect successful login
          console.log(this.authService.isLoggedIn());
          console.log(this.authService.getUserName());
          console.log(this.authService.getUserType());
          alert("logged in");
          this.router.navigate(['/home']);
        },
        error => {
          // Handle login failure
          this.errorMessage = error;
        }
      );
  }
  /*ngOnInit(): void {
    console.log("Testing");
    console.log(this.authService.isLoggedIn());
    console.log(this.authService.getUserName());
    console.log(this.authService.getUserType());
    if(this.authService.isLoggedIn()){
          alert("already logged in");
          this.router.navigate(['/home']);
    }
  }*/
}