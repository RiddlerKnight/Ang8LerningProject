import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AccountService } from 'src/app/services/accounts.service';
import { NgForm } from '@angular/forms';
import { AccountModel } from 'src/app/services/models/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  constructor(private accountService:AccountService, private router:Router) { }
  private loginedAccount:AccountModel = null;

  //@ViewChild('f') editForm:NgForm;
  ngOnInit() {
    this.accountService.UserLoginObserver.subscribe((acc)=>{
      this.loginedAccount = acc;
      // this.editForm.setValue({
      //   name: account.Name,
      //   department: account.Department,
      //   age: account.Ages
      // });
    });

    let account = this.accountService.GetLoginedAccountInfo();
    if(account != null)
    {
      // When object has passed to a variable, the variable is the object instance which means when you edit the value inside, 
      // the values inside will change across the project.
      this.loginedAccount = new AccountModel(account.UserName, account.Password, account.Name, account.Department, account.Ages);
    }
    // this.accountService.GetLoginedAccountInfo() === null ? this.CanEdit = false:this.CanEdit = true;
    // this.accountService.AccountLogoutNotify.subscribe(()=>{this.CanEdit = false;});
    // this.accountService.AccountLoginNotify.subscribe(()=>{this.CanEdit = true;});
  }

  OnEditing(form:NgForm){

    if(confirm("Are you sure to save these?")){
      const value = form.value;

      this.accountService.UpdateAccountInfo(this.loginedAccount.UserName,
        value.name, value.department, value.age);
        this.router.navigate(['account-overview']);
    }else{
      this.router.navigate(['account-overview']);
    }
  }

}
