import { Component, OnInit, Input , SimpleChanges} from '@angular/core';
import {ProductItemModel} from '../item-model-object';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss']
})
export class ItemModelComponent implements OnInit {

  @Input() ProductElement:ProductItemModel;
  @Input() ProductName:string; //This var is used for test Lifecycle hooks
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log("ngOnChanges Call!!");
    console.log(changes);
  }
}
