import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs.component';
import { StockbrokersComponent } from './stockbrokers.component';
import { ExtrasRoutingModule } from './extras-routing.module';

@NgModule({
  declarations: [BlogsComponent, StockbrokersComponent],
  imports: [
    CommonModule,
    ExtrasRoutingModule
  ]
})
export class ExtrasModule { }
