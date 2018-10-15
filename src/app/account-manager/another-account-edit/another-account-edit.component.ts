import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/services/models/account.model';
import { AnotherAccountEditService } from './another-account-edit.service';

@Component({
  selector: 'app-another-account-edit',
  templateUrl: './another-account-edit.component.html',
  styleUrls: ['./another-account-edit.component.scss'],
  providers:[AnotherAccountEditService]
})
export class AnotherAccountEditComponent implements OnInit {
  constructor(private anotherAccountService:AnotherAccountEditService) { }

  ngOnInit() {
    
  }

}
