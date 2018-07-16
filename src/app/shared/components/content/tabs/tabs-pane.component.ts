import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'saa-tabs-pane',
    templateUrl: 'tabs-pane.component.html'
})

export class TabsPaneComponent {
    @Input('title') title: string;
    @Input() active = false;
}
