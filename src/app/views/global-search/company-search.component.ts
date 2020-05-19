import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html'
})
export class CompanySearchComponent implements OnInit {

  companyRecords : any;

  constructor(private investAppServiceService: InvestAppServiceService) {
  }

  ngOnInit(): void {
  }

  companyName = new FormControl('', Validators.required);

  onSubmit() {
    console.log(this.companyName.value);
    this.searchCompanyProducts(this.companyName.value);
  }

  searchCompanyProducts(symbol: String) {
    this.investAppServiceService
                      .getCompanyProducts(symbol)
                      .subscribe(
                        res => { 
                          this.companyRecords = res.results;
                        }, 
                        err => {},
                        () => {});
  }
}
