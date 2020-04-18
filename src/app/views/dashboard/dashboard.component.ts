import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { InvestAppServiceService } from '../invest-app-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  fmcgCompanies : any;

  constructor(private investAppServiceService: InvestAppServiceService,
              private router: Router) {
  }

  // barChart
  public fmcgBarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //public barChartLabels: string[] = ['ITC', 'HUL', 'Dabur', 'UBL', 'PGHH', 'Nestle', 'Marico'];
  public fmcgBarChartLabels: string[] = [];
  public fmcgBarChartType = 'bar';
  public fmcgBarChartLegend = true;

  /*public fmcgBarChartData: any[] = [
    {data: [35, 29, 8, 41, 56, 55, 40, 23, 15, 8], label: 'Products'}
  ];*/

  public fmcgBarChartData: any[] = [
    {data: [], label: 'Products'}
  ]

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.loadFmcgData();
  }

  loadFmcgData() {
    this.investAppServiceService
                      .getProductCountBySector('fmcg')
                      .subscribe(
                        res => { 
                          this.fmcgCompanies = res.results;
                          this.getCompanyNamesAndCount(this.fmcgCompanies);
                        }, 
                        err => {},
                        () => {});
  }

  getCompanyNamesAndCount(companies: any) {
    for (let company of companies) {
      this.fmcgBarChartLabels.push(company.companyName);
      this.fmcgBarChartData[0].data.push(company.count);
    }
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

  public chartClicked(e: any): void {
    this.router.navigate(['/sectors']);
  }
}
