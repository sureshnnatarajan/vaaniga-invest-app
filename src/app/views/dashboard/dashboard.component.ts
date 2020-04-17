import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { InvestAppServiceService } from '../invest-app-service.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  companies : any;

  constructor(private investAppServiceService: InvestAppServiceService) { }

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //public barChartLabels: string[] = ['ITC', 'HUL', 'Dabur', 'UBL', 'PGHH', 'Nestle', 'Marico'];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [35, 29, 8, 41, 56, 55, 40, 23, 15, 8], label: 'Products'}
  ];

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.loadFmcgData();
  }

  loadFmcgData() {
    this.investAppServiceService
                      .getCompaniesBySector('fmcg')
                      .subscribe(
                        res => { 
                          this.companies = res.results;
                          this.getCompanyNames(this.companies);
                        }, 
                        err => {},
                        () => {});
  }

  getCompanyNames(companies: any) {
    for (let company of companies) {
      this.barChartLabels.push(company.companyName);
    }
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

  public chartClicked(e: any): void {
    //console.log(e);
  }
}
