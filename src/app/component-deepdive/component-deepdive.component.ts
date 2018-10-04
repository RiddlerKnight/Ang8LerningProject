import { Component, OnInit } from '@angular/core';
import {ProductItemModel} from './item-model-object';

@Component({
  selector: 'app-component-deepdive',
  templateUrl: './component-deepdive.component.html',
  styleUrls: ['./component-deepdive.component.scss']
})
export class ComponentDeepdiveComponent implements OnInit {

  ProductList:ProductItemModel[] = [new ProductItemModel(1,'Coffe','Espresso'),
                                    new ProductItemModel(1,'Coffe Latte','Latte')]

  constructor() { }

  ngOnInit() {
  }

}
