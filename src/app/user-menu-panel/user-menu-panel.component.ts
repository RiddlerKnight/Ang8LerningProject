import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/accounts.service';
import { AccountModel } from '../services/models/account.model';

@Component({
  selector: 'app-user-menu-panel',
  templateUrl: './user-menu-panel.component.html',
  styleUrls: ['./user-menu-panel.component.scss']
})
export class UserMenuPanelComponent implements OnInit {

  loginedAccount:AccountModel;
  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.loginedAccount = this.accountService.GetLoginedAccountInfo();
    this.accountService.AccountLoginNotify.subscribe((acc:AccountModel) => {
      this.loginedAccount = acc;
    });
    this.accountService.AccountLogoutNotify.subscribe((acc:AccountModel) => {
      this.loginedAccount = null;
    });
  }

  Logout()
  {
    this.accountService.LogoutTheAccount();
  }

}
