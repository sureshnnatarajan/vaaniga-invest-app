import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html'
})
export class GlobalSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value 
    width: 600,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value 
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    {text: 'Biscuit', weight: 8, link: 'https://vaaniga.com', color: '#ffaaee'},
    {text: 'Shampoo', weight: 5, link: 'https://vaaniga.com', color: '#ffaaee'},
    {text: 'Soap', weight: 7, link: 'https://vaaniga.com', color: '#ffaaee'},
    {text: 'Chocolate', weight: 4, link: 'https://vaaniga.com', color: '#ffaaee'},
    {text: 'Deodorants', weight: 9, link: 'https://vaaniga.com', color: '#ffaaee'},

  ];

}
