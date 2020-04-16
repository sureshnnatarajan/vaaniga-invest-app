import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpfasComponent } from './ppfas.component';
import { MutualfundsRoutingModule } from './mutualfunds-routing.module';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [PpfasComponent],
  imports: [
    CommonModule,
    TabsModule,
    MutualfundsRoutingModule
  ]
})
export class MutualfundsModule { }
