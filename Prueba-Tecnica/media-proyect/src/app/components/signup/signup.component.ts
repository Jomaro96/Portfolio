import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'; //Redireccionar
import { global } from '../../services/global';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [UserService]
})
export class SignupComponent {

  public user:User;
  confirmPassword: string;
  constructor(
    private _userService:UserService,
    private _router:Router
  ){
    this.user = new User('','','','','R');
  }

  onSubmit(form:any){
    //console.log(this.project);
    this._userService.addUser(this.user).subscribe(
      response => {
        if(response.user){
            
              alert("User created!!!");
              this._router.navigate(['/login']);
            
        }else{
          
          alert("Error uploading, try later");
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
