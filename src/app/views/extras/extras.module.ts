import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { StockbrokersComponent } from './stockbrokers.component';
import { ExtrasRoutingModule } from './extras-routing.module';
import { LearnComponent } from './learn.component';

@NgModule({
  declarations: [LearnComponent, StockbrokersComponent],
  imports: [
    CommonModule,
    ExtrasRoutingModule,
    TabsModule
  ]
})
export class ExtrasModule { }
