import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'saa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pills = [
    {
      label: 'HTML'
    },
    {
      label: 'CSS'
    },
    {
      label: 'SASS'
    }
  ];
}
