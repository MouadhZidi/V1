import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const API_URL = environment.urlServerMouadh;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  host = API_URL;

  private header: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders();
  }

  GetChambre = (): Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/facture/get");
  };

  GetChambreByCode = (): Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/demande/getListDemandee/02");
  };

  GetConge = () : Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/conge/getbycodesocandmatpers/01/12025")
  }

  getNom = () : Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/conge/getnom/01/12025")
  }

  getPrenom = () : Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/conge/getprenom/01/12025")
  }

  GetCongeById = () : Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/conge/getcongebyeid/01/12025")
  }
}
