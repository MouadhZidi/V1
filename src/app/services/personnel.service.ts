import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const pers_API = 'http://192.1:8080/pers/getbycodesocandmatpers/';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }
  getbycodesocandmatpers(){
    return this.http.get("http://192.168.2.95:8080/pers/getbycodesocandmatpers/01/07879")
  }
  getetatpaie(){
    return this.http.get("http://192.168.2.95:8080/pers/get1/01/07879")


  }
  getnat(){
    return this.http.get("http://192.168.2.95:8080/pers/get2/01/07879")
  }
  getaffect(){
    return this.http.get("http://192.168.2.95:8080/pers/get3/01/07879")
  }
}
