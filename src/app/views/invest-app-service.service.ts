import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestAppServiceService {

  adminEndpoint = environment.invest_api_endpoint;

  constructor(private http: HttpClient) { }

  public getCompanies() {
    return this.http.get<any>(this.adminEndpoint + '/companies/all');
  }

  public getCompaniesBySector(sectorName: String) {
    return this.http.get<any>(this.adminEndpoint + '/companies/' + sectorName);
  }

  public saveLikeForCompany(company: String) {
    return this.http.post<any>(this.adminEndpoint + '/companies/like/' + company, "");
  }

  public getLikeCountForCompany(company: String) {
    return this.http.get<any>(this.adminEndpoint + '/companies/like/' + company);
  }
}
