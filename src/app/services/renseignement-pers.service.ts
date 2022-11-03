import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RENSEIGNEMENTPERSService {

  constructor(private http: HttpClient) { 
  }
  getRENSEIGNEMENTPERSbycodesocandmatpers(){
    return this.http.get("http://192.168.2.95:8080/RENSEIGNEMENT_PERS/getbycodesocandmatpers/01/07879")
  }
  getdebcycle(){
    return this.http.get("http://192.168.2.95:8080/RENSEIGNEMENT_PERS/get1/01/07879")

  }
  getfin(){
    return this.http.get("http://192.168.2.95:8080/RENSEIGNEMENT_PERS/get2/01/07879")

  }
  get3(){
    return this.http.get("http://192.168.2.95:8080/RENSEIGNEMENT_PERS/get3/01/07879")

  }
  get4(){
    return this.http.get("http://192.168.2.95:8080/RENSEIGNEMENT_PERS/get4/01/07879")


  }
}
