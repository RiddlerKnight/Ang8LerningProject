import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{
  title = 'AngularSimpleProject';
  
  constructor(private accountServices:AccountService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.accountServices.AddAccount('godspeed','1234','Gon');
  }
}
