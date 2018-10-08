import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-testing',
  templateUrl: './directive-testing.component.html',
  styleUrls: ['./directive-testing.component.scss']
})
export class DirectiveTestingComponent implements OnInit {

  showAppUnless = false;
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
}
