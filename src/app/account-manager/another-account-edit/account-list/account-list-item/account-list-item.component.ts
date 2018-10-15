import { Component, OnInit, Input } from '@angular/core';
import { AccountModel } from 'src/app/services/models/account.model';

@Component({
  selector: 'app-account-list-item',
  templateUrl: './account-list-item.component.html',
  styleUrls: ['./account-list-item.component.scss']
})
export class AccountListItemComponent implements OnInit {

  @Input() accountItem:AccountModel;
  constructor() { }

  ngOnInit() {
  }

}
