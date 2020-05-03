import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListedCompaniesComponent } from './listed-companies.component';
import { ListedCompaniesRoutingModule } from './listed-companies-routing.module';

@NgModule({
  declarations: [ListedCompaniesComponent],
  imports: [
    CommonModule,
    ListedCompaniesRoutingModule
  ]
})
export class ListedCompaniesModule { }
