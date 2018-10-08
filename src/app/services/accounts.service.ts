import { AccountModel } from "./models/account.model";

export class AccountService{
    private account:AccountModel[] = [new AccountModel('admin','tong', 'Administrator'),
                                new AccountModel('andru','tong', 'Andru Big', 'CEO'),
                                new AccountModel('morgan','tong', 'Morgan Meson','CFO'),
                                new AccountModel('itagi','tong', ' Itachi Uchiha','CMO')]
    loginAs:string;

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
    }

    GetLoginTheAccount(username:string, password:string):AccountModel
    {
        var checkAcc =this.account.filter(acc=>
            acc.UserName === username && 
            acc.Password === password)[0];

        return checkAcc;
    }
}