import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/accounts.service';
import { AccountModel } from '../services/models/account.model';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
  providers: [AccountService]
})
export class AccountLoginComponent implements OnInit {

  tbUsernameValue:string;
  tbPasswordValue:string;

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  Login()
  {
    var theAccount = this.accountService.GetLoginTheAccount(this.tbUsernameValue, 
                                                            this.tbPasswordValue);
    if(theAccount != null) {
      alert('Login Complete');
    }else{
      alert('Login fail');
    }
  }
}