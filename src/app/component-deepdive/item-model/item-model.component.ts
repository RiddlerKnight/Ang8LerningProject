import { Component, OnInit, Input } from '@angular/core';
import {ProductItemModel} from '../item-model-object';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss']
})
export class ItemModelComponent implements OnInit {

  @Input() ProductElement:ProductItemModel;

  constructor() { }

  ngOnInit() {
  }

}
