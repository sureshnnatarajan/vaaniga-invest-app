import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmcgComponent } from './fmcg.component';
import { PharmaComponent } from './pharma.component';
import { CementComponent } from './cement.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sectors'
    },
    children: [
      {
        path: '',
        redirectTo: 'fmcg'
      },
      {
        path: 'fmcg',
        component: FmcgComponent,
        data: {
          title: 'FMCG'
        }
      },
      {
        path: 'pharma',
        component: PharmaComponent,
        data: {
          title: 'Pharma'
        }
      },
      {
        path: 'cement',
        component: CementComponent,
        data: {
          title: 'Cement'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorsRoutingModule {}
