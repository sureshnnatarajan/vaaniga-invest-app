import { Component, OnInit } from '@angular/core';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  templateUrl: 'fmcg.component.html'
})
export class FmcgComponent implements OnInit {

  companies : any;

  constructor(private investAppServiceService: InvestAppServiceService) { }

  ngOnInit(): void {
    this.investAppServiceService
                      .getCompanies()
                      .subscribe(
                        res => {
                          console.log(res);
                          this.companies = res.results;
                        }, 
                        err => {

                        },
                        () => {

                        });
  }

}
