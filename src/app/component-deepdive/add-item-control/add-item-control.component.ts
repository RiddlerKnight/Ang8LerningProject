import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ProductItemModel } from '../item-model-object';

@Component({
  selector: 'app-add-item-control',
  templateUrl: './add-item-control.component.html',
  styleUrls: ['./add-item-control.component.scss']
})
export class AddItemControlComponent implements OnInit {

  @Output() AddProductCommand:EventEmitter<ProductItemModel> = new EventEmitter<ProductItemModel>();

  //this approach show how to access input element by ViewChild
  @ViewChild('commentMessage') CommentInputElement:ElementRef;

  productName = "";
  productDetail ="";

  constructor() { }

  ngOnInit() {
  }

  AddProduct(commentMessage: HTMLInputElement)
  {
    //console.log("Get comment value by local ref : "+commentMessage.value); //This use local ref to get the value from input element
    //console.log("Get comment value by ViewChild :"+this.CommentInputElement.nativeElement.value);

    var theProduct = new ProductItemModel(1 , this.productName, this.productDetail);
    this.AddProductCommand.emit(theProduct);
    this.productName ='';
    this.productDetail='';
    //console.log(theProduct);
  }
}
