import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListedCompaniesComponent } from './listed-companies.component';

const routes: Routes = [
  {
    path: '',
    component: ListedCompaniesComponent,
    data: {
      title: 'Listed Companies'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListedCompaniesRoutingModule {}
