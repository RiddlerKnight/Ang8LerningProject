import { Component, OnInit, Input , SimpleChanges} from '@angular/core';
import {ProductItemModel} from '../item-model-object';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss']
})
export class ItemModelComponent implements OnInit {

  @Input() ProductElement:ProductItemModel;
  @Input() ProductNameTestHooks:string; //This var is used for test Lifecycle hooks

  Editting = false;
  productName:string;
  productDetail:string;
  
  constructor() {
    //console.log("constructor Call!!");
   }

  ngOnInit() {
    //console.log("ngOnInit Call!!");

    this.productName = this.ProductElement.ProductName;
    this.productDetail = this.ProductElement.ProductDetail;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    //console.log("ngOnChanges Call!!");
    //console.log(changes);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //console.log("ngDoCheck Call!!");
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //console.log("ngAfterContentInit Call!!");
  }

  EditProduct()
  {
    this.Editting = true;
  }

  EditCompleted()
  {
    this.ProductElement.ProductName = this.productName;
    this.ProductElement.ProductDetail = this.productDetail;
    this.Editting = false;
  }
}
