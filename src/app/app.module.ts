import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Content Components
import { AccordionComponent } from './shared/components/content/accordion/accordion.component';
import { AccordionPaneComponent } from './shared/components/content/accordion/accordion-pane.component';
import { TabsComponent } from './shared/components/content/tabs/tabs.component';
import { TabsPaneComponent } from './shared/components/content/tabs/tabs-pane.component';

// Navigation Components
import { NavBarPrimaryComponent } from './shared/components/navigation/navbar-primary/navbar-primary.component';
import { NavBarSecondaryComponent } from './shared/components/navigation/navbar-secondary/navbar-secondary.component';
import { PillsComponent } from './shared/components/navigation/pills/pills.component';

// PopUp Components
import { ModalComponent } from './shared/components/popups/modal/modal.component';
import { ToolTipComponent } from './shared/components/popups/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionPaneComponent,
    TabsComponent,
    TabsPaneComponent,
    NavBarPrimaryComponent,
    NavBarSecondaryComponent,
    PillsComponent,
    ModalComponent,
    ToolTipComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
