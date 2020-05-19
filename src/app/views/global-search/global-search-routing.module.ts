import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalSearchComponent } from './global-search.component';
import { CompanySearchComponent } from './company-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Search'
    },
    children: [
      {
        path: '',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: GlobalSearchComponent,
        data: {
          title: 'Keyword Search'
        }
      },
      {
        path: 'product-search',
        component: CompanySearchComponent,
        data: {
          title: 'Product Search'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalSearchRoutingModule {}
