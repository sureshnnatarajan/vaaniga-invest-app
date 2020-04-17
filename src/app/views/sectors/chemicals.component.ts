import { Component, OnInit } from '@angular/core';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html'
})
export class ChemicalsComponent implements OnInit {

  companies : any;

  constructor(private investAppServiceService: InvestAppServiceService) { }

  ngOnInit(): void {
    this.loadFmcgData();
  }

  loadFmcgData() {
    this.investAppServiceService
                      .getCompaniesBySector('chemicals')
                      .subscribe(
                        res => { this.companies = res.results; }, 
                        err => { },
                        () => { });
  }

  loadLikeCount(companies: any) {
    for (let company of companies) {
      this.investAppServiceService.getLikeCountForCompany(company.companyName)
                                  .subscribe(res => {
                                    console.log("Count for :" + company.companyName + " is");
                                  });
    }
  }

  saveLike(companyName) {
    this.investAppServiceService.saveLikeForCompany(companyName).subscribe(res => {});
  }

}
