import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { StockbrokersComponent } from './stockbrokers.component';
import { ExtrasRoutingModule } from './extras-routing.module';
import { LearnComponent } from './learn.component';
import { ReferandearnComponent } from './referandearn.component';
import { NseOptionchainComponent } from './nse-optionchain.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LearnComponent, StockbrokersComponent, ReferandearnComponent, NseOptionchainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExtrasRoutingModule,
    TabsModule
  ]
})
export class ExtrasModule { }
