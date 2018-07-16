import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'saa-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
    isOpen = false;

    toggleOpenClose() {
        if (!this.isOpen) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

}
