import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn.component';
import { StockbrokersComponent } from './stockbrokers.component';

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
