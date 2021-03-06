import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/services/models/account.model';
import { AccountService } from 'src/app/services/accounts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {

  constructor(private accountService:AccountService, public router:Router, private currentRout:ActivatedRoute) { }
  public loginedAccount:AccountModel;

  ngOnInit() {
    this.accountService.UserLoginObserver.subscribe((acc:AccountModel)=>{
      this.loginedAccount = acc;
    });

    let account = this.accountService.GetLoginedAccountInfo();
    if(account != null)
    {
      this.loginedAccount = account;
    }
  }

  EditAccount(){
    this.router.navigate(["edit"], {relativeTo:this.currentRout});
  }

  EditAnotherAccount(){
    this.router.navigate(['another-edit'], {relativeTo:this.currentRout})
  }

}
