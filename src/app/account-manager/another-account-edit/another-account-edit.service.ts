import { Injectable, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/accounts.service";
import { AccountModel } from "src/app/services/models/account.model";

@Injectable()
export class AnotherAccountEditService implements OnInit{
    constructor(private accountService:AccountService){
        this.Account = this.accountService.GetAllAccounts();
    }

    SelectedAccount:AccountModel = null;
    private Account:AccountModel[] = null;
    ngOnInit(){
        
    }

    GetAccountList():AccountModel[]{
        return this.Account;
    }
}