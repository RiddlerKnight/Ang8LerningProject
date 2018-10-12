import { CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AccountService } from "./accounts.service";

@Injectable()
export class AuhthGuard implements CanActivate{
    constructor(private authService:AccountService,private router:Router){}
    canActivate(rout:ActivatedRouteSnapshot, 
                state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        if(this.authService.isAuthenticated()){
            return true;
        } else {
            this.router.navigate(['/account-login']);
            return false;
        };
    }
}