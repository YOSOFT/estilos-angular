import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'saa-accordion-pane',
    templateUrl: 'accordion-pane.component.html'
})

export class AccordionPaneComponent {
    @ViewChild(TemplateRef) template;
    @Input('title') title: string;
    @Input() active = false;
}
