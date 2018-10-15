import { AccountModel } from "./models/account.model";
import { SimpleLogService } from "./simple-log.service";
import { Injectable, EventEmitter, Input, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()  //This is required when we need to inject another services to this service
export class AccountService implements OnInit{
    constructor(private logService:SimpleLogService){}

    //this property is should be private
    private account:AccountModel[] = [new AccountModel('admin','tong', 'Administrator'),
                                new AccountModel('andru','tong', 'Andru Big', 'CEO'),
                                new AccountModel('morgan','tong', 'Morgan Meson','CFO'),
                                new AccountModel('itagi','tong', ' Itachi Uchiha','CMO')]
    private loginAs:AccountModel = null;
    //loginAs2:Observable<AccountModel> = new Observable();
    UserLoginObserver = new Subject<AccountModel>();
    
    isAuthenticated():boolean{
        if(this.loginAs !== null) return true;
        else return false;
    }
    ngOnInit(): void {

    }
    // @Input() NewAccountAddNotify = new EventEmitter<AccountModel>();
    // @Input() AccountLoginNotify = new EventEmitter<AccountModel>();
    // @Input() AccountLogoutNotify = new EventEmitter<AccountModel>();
    // @Input() AccountStatusUpdateNotify = new EventEmitter<AccountModel>();

    AddAccount(username:string,
        password:string, 
        name:string, 
        department:string = '', 
        ages:number = null){
        this.account.push(new AccountModel(username,password,name,department,ages));
    }

    // UpdateStatus(username:string, status:string){
    //     var chosenAccount = this.account.filter((account)=>{account.UserName === username;})[0];
    //     chosenAccount.status = status;
    //     this.logService.logStatusChange(status);
    // }

    GetLoginTheAccount(username:string, password:string):boolean
    {
        var checkAcc =this.account.filter(acc=>
            acc.UserName === username && 
            acc.Password === password)[0];
        if(checkAcc !== undefined)
        {
            this.loginAs = checkAcc;
            this.logService.logStatusChange(checkAcc.Name +' is Online');
            this.UserLoginObserver.next(this.loginAs);
            return true;
        }else
        {
            return false;
        }
    }

    GetAllAccounts():AccountModel[]{
        return this.account;
    }

    GetLoginedAccountInfo():AccountModel{
        return this.loginAs;
    }

    UpdateAccountInfo(username:string, name:string, department:string, age:number):boolean{
        let checkAcc:AccountModel =this.account.filter(acc=>
            acc.UserName === username)[0]
        var index = this.account.indexOf(checkAcc);
        if(checkAcc !== undefined)
        {
            this.account[index].Name = name;
            this.account[index].Department = department;
            this.account[index].Ages = age;
            console.log(this.account[index]);
            this.loginAs = checkAcc;
            this.UserLoginObserver.next(this.loginAs);
            
            return true;
        }else return false;
    }

    LogoutTheAccount(){
        this.logService.logStatusChange(this.loginAs.Name +' is offline');
        //this.AccountLogoutNotify.emit(this.loginAs);
        this.loginAs = null;
        this.UserLoginObserver.next(this.loginAs);
    }
}