import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'saa-pills',
  templateUrl: 'pills.component.html'
})

export class PillsComponent {
    @Input() pills;
    selectedPill: string;

    togglePill(pill) {
        this.selectedPill = pill;
    }

}
