import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSimpleProject';
  slideValue = 0;

  AlertNow(event: Event, value: string) {
    console.log(event);
    alert("You Clicked : Value is " + value);
  }
}
