import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
        <div>
            <ul>
                <ng-content></ng-content>
            </ul>
        </div>
    `,
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {}
