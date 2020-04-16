import { Component, OnInit } from '@angular/core';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html'
})
export class PharmaComponent implements OnInit {

  companies : any;

  constructor(private investAppServiceService: InvestAppServiceService) { }

  ngOnInit(): void {
    this.investAppServiceService
                      .getCompaniesBySector('pharma')
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
