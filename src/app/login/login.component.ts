import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
  })
  ngOnInit(): void {
  }

  userLogin(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe(res =>{
        console.log(res);
        localStorage.setItem("token",res.token);
        this.loginForm.reset();
        this.router.navigate(["/student"]);
        alert("Login Successfull !!");
      },
      err=> {
        alert("WRONG EMAIL OR PASSWORD")
        console.log(err);
      })
    }
  }

}
