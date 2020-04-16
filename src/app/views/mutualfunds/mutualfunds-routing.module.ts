import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PpfasComponent } from './ppfas.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'MutualFunds'
    },
    children: [
      {
        path: '',
        redirectTo: 'ppfas'
      },
      {
        path: 'ppfas',
        component: PpfasComponent,
        data: {
          title: 'PPFAS'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualfundsRoutingModule {}
