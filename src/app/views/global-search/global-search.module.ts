import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchComponent } from './global-search.component';
import { GlobalSearchRoutingModule } from './global-search-routing.module';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { CompanySearchComponent } from './company-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GlobalSearchComponent, CompanySearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalSearchRoutingModule,
    TagCloudModule
  ]
})
export class GlobalSearchModule { }
