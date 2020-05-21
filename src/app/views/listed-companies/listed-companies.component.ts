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
  notListedInBse : any[] = [];
  notListedInNse : any[] = [];
  listedInNseAndBse : any[] = [];

  largeCapCompaniesCount = 0;
  midCapCompaniesCount = 0;
  smallCapCompaniesCount = 0;

  constructor(private investAppService: InvestAppServiceService) { }

  ngOnInit(): void {
    this.investAppService.getListedCompanies()
                         .subscribe(
                           res => {
                             //console.log("Results ->", res.results);
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
        this.checkNseBseListed(element);
        this.checkBseListed(element);
        this.checkNseListed(element);
        this.largeCapCompaniesCount = this.largeCapCompaniesCount + 1;
      }
      if (element.marketCapCategorization === 'Mid Cap') {
        this.midCapCompanies.push(element);
        this.checkNseBseListed(element);
        this.checkBseListed(element);
        this.checkNseListed(element);
        this.midCapCompaniesCount = this.midCapCompaniesCount + 1;
      }
      if (element.marketCapCategorization === 'Small Cap') {
        this.smallCapCompanies.push(element);
        this.checkNseBseListed(element);
        this.checkBseListed(element);
        this.checkNseListed(element);
        this.smallCapCompaniesCount = this.smallCapCompaniesCount + 1;
      }
    });
    //console.log("BSE Not Listed ==>" + JSON.stringify(this.notListedInBse));
    //console.log("NSE Not Listed ==>" + JSON.stringify(this.notListedInNse));
  }

  checkNseListed(element: any) {
    if (element.nseSymbol.length <= 0) {
      this.notListedInNse.push(element);
    }
  }

  checkBseListed(element: any) {
    if (element.bseSymbol.length <= 0) {
      this.notListedInBse.push(element);
    }
  }

  checkNseBseListed(element: any) {
    if (element.nseSymbol.length >= 0 && element.bseSymbol.length >=0 ) {
      this.listedInNseAndBse.push(element);
    }
  }
}
