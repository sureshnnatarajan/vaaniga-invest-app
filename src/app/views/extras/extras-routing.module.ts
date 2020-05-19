import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn.component';
import { StockbrokersComponent } from './stockbrokers.component';
import { ReferandearnComponent } from './referandearn.component';
import { NseOptionchainComponent } from './nse-optionchain.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Extras'
    },
    children: [
      {
        path: '',
        redirectTo: 'learn'
      },
      {
        path: 'learn',
        component: LearnComponent,
        data: {
          title: 'Learn'
        }
      },
      {
        path: 'nseoption',
        component: NseOptionchainComponent,
        data: {
          title: 'NSE Option'
        }
      },
      {
        path: 'earn',
        component: ReferandearnComponent,
        data: {
          title: 'Earn'
        }
      }
      /*
      {
        path: 'stockBrokers',
        component: StockbrokersComponent,
        data: {
          title: 'StockBrockers'
        }
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrasRoutingModule {}
