import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItemModel } from '../item-model-object';

@Component({
  selector: 'app-add-item-control',
  templateUrl: './add-item-control.component.html',
  styleUrls: ['./add-item-control.component.scss']
})
export class AddItemControlComponent implements OnInit {

  @Output() AddProductCommand:EventEmitter<ProductItemModel> = new EventEmitter<ProductItemModel>();

  productName = "";
  productDetail ="";

  constructor() { }

  ngOnInit() {
  }

  AddProduct()
  {
    var theProduct = new ProductItemModel(1 , this.productName, this.productDetail);
    this.AddProductCommand.emit(theProduct);
    console.log(theProduct);
  }
}
