import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  constructor(private http: HttpClient) { }
  getetablissementbycodesocandmatpers = (): Observable<any[]> => {
    return this.http.get<any[]>("http://192.168.2.95:8080/ETABLIS/getetablissementbycodesocandmatpers/01/07879");
  };
}
