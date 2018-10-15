import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/accounts.service';
import { AccountModel } from './services/models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularSimpleProject';

  constructor(private accountService:AccountService){}
  hasAnAccountLogined = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.accountService.AddAccount('godspeed','1234','Gon', 'CEO', 26);

    // this.accountService.GetLoginedAccountInfo() != null ? this.hasAnAccountLogined = true: false;

    this.accountService.UserLoginObserver.subscribe((acc:AccountModel) => {
      if(acc === null){
        this.hasAnAccountLogined = false;
      }else{
      this.hasAnAccountLogined = true;
      }
    });
    // this.accountService.AccountLogoutNotify.subscribe((acc:AccountModel) => {
    //   this.hasAnAccountLogined = false;
    // });
  }
}
