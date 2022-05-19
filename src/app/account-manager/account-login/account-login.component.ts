import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/services/models/account.model';
import { AccountService } from 'src/app/services/accounts.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
})
export class AccountLoginComponent implements OnInit {

  tbUsernameValue:string;
  tbPasswordValue:string;
  public loginedAccount:AccountModel;

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit() {
    this.accountService.UserLoginObserver.subscribe((acc:AccountModel)=>{
      this.loginedAccount = acc;
    });

    // this.accountService.AccountLoginNotify.subscribe((acc:AccountModel)=>{
    //   this.loginedAccount = acc;
    // });

    // this.accountService.AccountLogoutNotify.subscribe((acc:AccountModel)=>{
    //   this.loginedAccount = null;
    // });
  }

  Login()
  {
    var theAccount = this.accountService.GetLoginTheAccount(this.tbUsernameValue,
                                                            this.tbPasswordValue);

    if(theAccount){
        console.log("Login Complete");
      console.log(theAccount);
      this.tbUsernameValue = '';
      this.tbPasswordValue = '';
      this.router.navigate(['/account-overview']);
    }else{
        console.log('Login fail');
    }
    // if(theAccount != null) {
    //   console.log("Login Complete");
    //   console.log(theAccount);
    //   this.tbUsernameValue = '';
    //   this.tbPasswordValue = '';
    //   this.router.navigate(['/account-overview']);
    // }else{
    //   console.log('Login fail');
    // }
  }

  Logout(){
    this.accountService.LogoutTheAccount();
  }

  ClearTb()
  {
    this.tbUsernameValue = '';
    this.tbPasswordValue = '';
  }

  OnLogin(form:NgForm)
  {
    const value = form.value;

    var theAccount = this.accountService.GetLoginTheAccount(value.username,
      value.password);

    if(theAccount){
      console.log("Login Complete");
      console.log(theAccount);
      this.router.navigate(['/account-overview']);
    }
    else{
      console.log('Login fail');
    }
  }
}
