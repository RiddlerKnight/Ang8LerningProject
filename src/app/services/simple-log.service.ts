export class SimpleLogService {
    logStatusChange(status:string){
        console.log('An user account status has been changed to ' + status);
    }
}