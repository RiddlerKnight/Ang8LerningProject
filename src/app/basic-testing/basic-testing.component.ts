import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-testing',
  templateUrl: './basic-testing.component.html',
  styleUrls: ['./basic-testing.component.scss']
})
export class BasicTestingComponent implements OnInit {
  
  slideValue = 0;
  ngCondition = true;
  ngStyleCondition = true;
  ngStyleString = "red";
  ngForArray = [];

  constructor() { }

  ngOnInit() {
  }

  AlertNow(event: Event, value: string) {
    console.log(event);
    alert("You Clicked : Value is " + value);
  }

  ResetSlideValue()
  {
    this.slideValue = 0;
  }

  NgConditionSwitching()
  {
    if(this.ngCondition)
    {
      this.ngCondition = false;
    }else
    {
      this.ngCondition = true;
    }
  }
  ChangeNgStyleString()
  {
    (this.ngStyleString === "red")?this.ngStyleString = "blue":this.ngStyleString = "red";
  }
  ChangeNgStyle()
  {
    (this.ngStyleCondition)?this.ngStyleCondition = false:this.ngStyleCondition = true;
  }

  AddDetail()
  {
    this.ngForArray.push(new Date());
  }

  ClearDetail()
  {
    this.ngForArray.length = 0;
  }

}
