import { AccountModel } from "./models/account.model";
import { SimpleLogService } from "./simple-log.service";
import { Injectable, EventEmitter, Input } from "@angular/core";

@Injectable()  //This is required when we need to inject another services to this service
export class AccountService{
    constructor(private logService:SimpleLogService){}

    //this property is should be private
    private account:AccountModel[] = [new AccountModel('admin','tong', 'Administrator'),
                                new AccountModel('andru','tong', 'Andru Big', 'CEO'),
                                new AccountModel('morgan','tong', 'Morgan Meson','CFO'),
                                new AccountModel('itagi','tong', ' Itachi Uchiha','CMO')]
    private loginAs:AccountModel;

    @Input() NewAccountAddNotify = new EventEmitter<AccountModel>();
    @Input() AccountLoginNotify = new EventEmitter<AccountModel>();
    @Input() AccountLogoutNotify = new EventEmitter<AccountModel>();
    @Input() AccountStatusUpdateNotify = new EventEmitter<AccountModel>();

    AddAccount(username:string,
        password:string, 
        name:string, 
        department:string = '', 
        ages:number = null){
        this.account.push(new AccountModel(username,password,name,department,ages));
    }

    UpdateStatus(username:string, status:string){
        var chosenAccount = this.account.filter((account)=>{account.UserName === username;})[0];
        chosenAccount.status = status;
        this.logService.logStatusChange(status);
    }

    GetLoginTheAccount(username:string, password:string):AccountModel
    {
        var checkAcc =this.account.filter(acc=>
            acc.UserName === username && 
            acc.Password === password)[0];
        
        this.loginAs = checkAcc;
        this.logService.logStatusChange(checkAcc.Name +' is Online');
        this.AccountLoginNotify.emit(checkAcc);
        return checkAcc;
    }

    GetLoginedAccountInfo():AccountModel{
        return this.loginAs;
    }

    LogoutTheAccount(){
        this.logService.logStatusChange(this.loginAs.Name +' is offline');
        this.AccountLogoutNotify.emit(this.loginAs);
        this.loginAs = null;
    }
}