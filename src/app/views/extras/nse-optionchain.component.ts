import { Component, OnInit } from '@angular/core';
import { InvestAppServiceService } from '../invest-app-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare const TradingView: any;

@Component({
  selector: 'app-nse-optionchain',
  templateUrl: './nse-optionchain.component.html'
})
export class NseOptionchainComponent implements OnInit {

  optionContractsTypes = [
    "NIFTY",
    "BANKNIFTY",
    "NIFTYIT"
  ];

  toggleExpiryDate = 0;

  optionChainForm = new FormGroup({
    optionContracts : new FormControl('', Validators.required)
  });
  
  dataRecords : any;
  filteredRecords : any;

  constructor(private investAppServiceService: InvestAppServiceService) {
  }

  ngOnInit(): void {
    this.loadOptionIndices("NIFTY");
  }

  sortData() {
    this.toggleExpiryDate = this.toggleExpiryDate == -1 ? 0 : -1;
    if (this.toggleExpiryDate == 0) {
      return this.dataRecords.sort((a, b) => {
        return <any>new Date(a.expiryDate) - <any>new Date(b.expiryDate);
      });
    } else {
      return this.dataRecords.sort((a, b) => {
        return <any>new Date(b.expiryDate) - <any>new Date(a.expiryDate);
      });
    }
  }

  sortFilteredRecords() {
    this.toggleExpiryDate = this.toggleExpiryDate == -1 ? 0 : -1;
    if (this.toggleExpiryDate == 0) {
      return this.filteredRecords.sort((a, b) => {
        return <any>new Date(a.expiryDate) - <any>new Date(b.expiryDate);
      });
    } else {
      return this.filteredRecords.sort((a, b) => {
        return <any>new Date(b.expiryDate) - <any>new Date(a.expiryDate);
      });
    }
  }

  loadOptionIndices(symbol: String) {
    this.investAppServiceService
                      .getOptionChainIndices(symbol)
                      .subscribe(
                        res => { 
                          this.dataRecords = res.records.data;
                          //this.sortData();
                          this.filterRecords();
                          this.sortFilteredRecords();
                        }, 
                        err => {},
                        () => {});
  }

  filterRecords() {
    this.filteredRecords = [];
    for (let data of this.dataRecords) {
      if (data.CE !== undefined && data.PE !== undefined ) {
        if (data.CE.lastPrice !== undefined && data.PE.lastPrice !== undefined) {
          if ( !(data.CE.lastPrice <= 0 || data.PE.lastPrice <= 0)) {
            this.filteredRecords.push(data);
          }
        }
      }
    }
    //console.log(this.filteredRecords);
  }

  indicesChange() {
    let optionChainChange = this.optionChainForm.value;
    this.loadOptionIndices(optionChainChange.optionContracts);
  }

}
