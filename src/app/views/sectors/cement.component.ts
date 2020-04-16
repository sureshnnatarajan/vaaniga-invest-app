import { Component, OnInit } from '@angular/core';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  selector: 'app-cement',
  templateUrl: './cement.component.html'
})
export class CementComponent implements OnInit {

  companies : any;

  constructor(private investAppServiceService: InvestAppServiceService) { }

  ngOnInit(): void {
    this.loadFmcgData();
  }

  loadFmcgData() {
    this.investAppServiceService
                      .getCompaniesBySector('cement')
                      .subscribe(
                        res => {
                          console.log(res);
                          this.companies = res.results;
                          //this.loadLikeCount(this.companies);  
                        }, 
                        err => {

                        },
                        () => {

                        });
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
