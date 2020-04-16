import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
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
        redirectTo: 'blogs'
      },
      {
        path: 'blogs',
        component: BlogsComponent,
        data: {
          title: 'Blogs'
        }
      },
      {
        path: 'stockBrokers',
        component: StockbrokersComponent,
        data: {
          title: 'StockBrockers'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrasRoutingModule {}
