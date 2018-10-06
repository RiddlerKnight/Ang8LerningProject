import { Component, OnInit ,SimpleChanges} from '@angular/core';
import {ProductItemModel} from './item-model-object';

@Component({
  selector: 'app-component-deepdive',
  templateUrl: './component-deepdive.component.html',
  styleUrls: ['./component-deepdive.component.scss']
})
export class ComponentDeepdiveComponent implements OnInit {

  ProductList:ProductItemModel[] = []// = [new ProductItemModel(1,'Coffe','Espresso'),
                                //   new ProductItemModel(1,'Coffe Latte','Latte')]

  constructor() { }

  ngOnInit() {
  }

  OnProductAdd(product:ProductItemModel)
  {
    this.ProductList.push(product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("In the component-deepdive");
    console.log(changes);
  }
}
