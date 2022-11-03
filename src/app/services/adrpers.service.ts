import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdrpersService {

  constructor(private http: HttpClient) { }
  getbycodesocandmatpers = (): Observable<any[]> => {
    return this.http.get<any[]>("http://192.168.2.95:8080/adrpers/getbysocandmat/01/07879");
  };
  getgouvernorat(){
  return this.http.get<any[]>("http://192.168.2.95:8080/adrpers/get1/01/07879");}
  getbycodesocandmatperslist = (): Observable<any[]> => {
    return this.http.get<any[]>("http://192.168.2.95:8080/adrpers/getbysocandmatlist/01/07879");
  };

}
