import { Component, OnInit } from '@angular/core';
import { AnotherAccountEditService } from '../another-account-edit.service';
import { AccountModel } from 'src/app/services/models/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {

  accountList:AccountModel[] = null;
  constructor(private anotherAccountService:AnotherAccountEditService) { }

  ngOnInit() {
    this.accountList = this.anotherAccountService.GetAccountList();
  }

}
