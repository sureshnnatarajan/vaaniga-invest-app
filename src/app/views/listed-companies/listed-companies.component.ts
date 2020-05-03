import { Component, OnInit } from '@angular/core';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  selector: 'app-listed-companies',
  templateUrl: './listed-companies.component.html'
})
export class ListedCompaniesComponent implements OnInit {

  largeCapCompanies : any[] = [];
  midCapCompanies : any[] = [];
  smallCapCompanies : any[] = [];

  constructor(private investAppService: InvestAppServiceService) { }

  ngOnInit(): void {
    this.investAppService.getListedCompanies()
                         .subscribe(
                           res => {
                             console.log("Results ->", res.results);
                             this.splitAndConstructCompanyCategories(res.results);
                           },
                           err => {},
                           () => {}
                          );
  }

  splitAndConstructCompanyCategories(results: any) {
    
    results.forEach(element => {
      if (element.marketCapCategorization === 'Large Cap') {
        this.largeCapCompanies.push(element);
      }
      if (element.marketCapCategorization === 'Mid Cap') {
        this.midCapCompanies.push(element);
      }
      if (element.marketCapCategorization === 'Small Cap') {
        this.smallCapCompanies.push(element);
      }
    });

  }

}
