import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsoin',
  templateUrl: './bsoin.component.html',
  styleUrls: ['./bsoin.component.css']
})
export class BsoinComponent implements OnInit {
  data !: [];
  data1 !: [];

  list:any=[];
  list1:any=[];


  constructor(private http  : HttpClient) { }

  ngOnInit(): void {

    this.getgouv();
  }


  fetchCession(){

    return this.http.get('http://192.168.2.94:8080/api/auth/getM/')/*
     .pipe(map((responseData : any)=>{
       const  cessionsPersArray =[];
       for( const key  in responseData){
         cessionsPersArray.push({ ...responseData[key],id :key});
         
       }
     }))*/
     
   }
   
  getgouv(){
    this.fetchCession().subscribe(
      data => {
        this.list = data; 
        console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );
    
    
    
    }
    anotherFunction( ) {

      
  
      console.log("this is meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
      this.fetchCession().subscribe(
        data1 => {
          this.list = data1; 
          console.log('MyValue' + data1);
        },
        err => {
          console.log(err);
        }
        );
      
  
    }

}
