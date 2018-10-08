import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-testing',
  templateUrl: './directive-testing.component.html',
  styleUrls: ['./directive-testing.component.scss']
})
export class DirectiveTestingComponent implements OnInit {

  showAppUnless = false;
  SwitchValue = 0;
  constructor() { }

  ngOnInit() {
  }

  toggleAppUnless()
  {
    if(this.showAppUnless)
    {
      this.showAppUnless = false;
    }else{
      this.showAppUnless = true;
    }
  }

  Switching(){
    this.SwitchValue = this.getRandomInt(1,3);
    console.log("SwitchValue is "+this.SwitchValue);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
