import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSimpleProject';

  AlertNow($event) {
    console.log($event);
    alert("You Clicked");
  }
}
