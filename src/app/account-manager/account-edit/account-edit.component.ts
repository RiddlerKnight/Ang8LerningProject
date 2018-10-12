import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  private CanEdit:boolean = false;
  constructor(private accountService:AccountService) { }

  ngOnInit() {
    // this.accountService.GetLoginedAccountInfo() === null ? this.CanEdit = false:this.CanEdit = true;
    // this.accountService.AccountLogoutNotify.subscribe(()=>{this.CanEdit = false;});
    // this.accountService.AccountLoginNotify.subscribe(()=>{this.CanEdit = true;});
  }

}
