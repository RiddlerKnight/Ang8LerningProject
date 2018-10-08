export class AccountModel{
    UserName:string;
    Password:string;
    Name:string;
    Department:string;
    Ages:number;
    status:string;

    constructor(username:string, 
                password:string, 
                name:string, 
                department:string = '', 
                ages:number = null){
        this.UserName = username;
        this.Password = password;
        this.Name = name;
        this.Department = department;
        this.Ages = ages;
    }
}