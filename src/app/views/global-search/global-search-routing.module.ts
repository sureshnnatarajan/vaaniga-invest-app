import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalSearchComponent } from './global-search.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalSearchComponent,
    data: {
      title: 'Search'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalSearchRoutingModule {}
