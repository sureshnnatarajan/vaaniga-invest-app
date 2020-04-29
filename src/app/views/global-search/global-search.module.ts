import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchComponent } from './global-search.component';
import { GlobalSearchRoutingModule } from './global-search-routing.module';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  declarations: [GlobalSearchComponent],
  imports: [
    CommonModule,
    GlobalSearchRoutingModule,
    TagCloudModule
  ]
})
export class GlobalSearchModule { }
