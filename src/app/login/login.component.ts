import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { User } from '../../model/user'
import { UserRegisterService } from 'src/services/user-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  retUrl: string;
  id: string;
  error="";
  email: string='';
  user: User[]=[];

  @ViewChild('f', {static: true}) myForm;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthenticationService,
      private activatedRoute: ActivatedRoute,
      private us: UserRegisterService
  ) {}  

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });

      this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });

      // this.us.getUser().subscribe(
      //   res=>{
      //     this.user=res
      //     console.log(this.user)
      //     for(var i=0 ;i<this.user.length;i++){
      //       console.log(this.user[i].email)
      //     }
      //   }
      // );
  }

  // convenience getter for easy access to form fields
  get fval() { return this.loginForm.controls; }

  login(){
    this.submitted=true;
    
    if (this.loginForm.invalid) {
      return;
    }
    this.us.getUser().subscribe(
      res=>{
      this.user=res
      this.authService.login(this.fval.email.value, this.fval.password.value)
      .pipe(first())
      .subscribe(
          data => {
            for(var i = 0 ;i<this.user.length; i++){
              if(this.fval.email.value==this.user[i].email && this.fval.password.value==this.user[i].password)
              {   
                  this.id= this.user[i].id
                  console.log(this.id)
                  this.us.setUserLoggedIn(this.id)
                  localStorage.setItem('isLoggedIn', "true");  
                  localStorage.setItem('token', this.id); 
              }
            }
            this.submitted =false;
            this.myForm.reset();
          },
          error => {
              this.error = error; 
          });
        })
      }
    }

    
      
  //     console.log( 'return to '+ this.retUrl);
  //     if (this.retUrl!=null) {
  //          this.router.navigate([this.retUrl]);
  //     } else {
  //          this.router.navigate( ['']);
  //     }
  // });
   //this.authService.login(email, password)
  
//   this.authService.login(loginForm.value.email,loginForm.value.password)
// .pipe(first())
// .subscribe(
// data => {
// const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
// this.router.navigate([redirect]);
// },
// error => {
// alert("Email or password is incorrect")
// });
  //}
// get email() { return this.angForm.get('email'); }
// get password() { return this.angForm.get('password'); }
