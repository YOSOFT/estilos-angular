import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionPaneComponent } from './accordion-pane.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'saa-accordion',
    templateUrl: 'accordion.component.html'
})

export class AccordionComponent {
    @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent>;

    ngAfterContentInit() {
        let activeItems = this.items.filter((item) => item.active);
    }

    selectItem(item: AccordionPaneComponent) {
        if (!item.active) {
            item.active = true;
        } else {
            item.active = false;
        }
    }

}
