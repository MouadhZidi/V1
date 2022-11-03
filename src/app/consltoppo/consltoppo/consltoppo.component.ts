import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consltoppo',
  templateUrl: './consltoppo.component.html',
  styleUrls: ['./consltoppo.component.css']
})
export class ConsltoppoComponent implements OnInit {
  data !: [];
  data1 !: [];

  list:any=[];
  list1:any=[];
  myValue: any 
  serverName!: HTMLInputElement;
username: any;
  constructor(private http  : HttpClient,private fb: FormBuilder) { }

  ngOnInit() {
this.getgouv()  }
   anotherFunction(event: any ) {

    if(event){

    console.log("this is meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"+event)
    this.fetchCession(event).subscribe(
      data1 => {
        this.list1 = data1; 
        console.log('MyValue' + data1);
      },
      err => {
        console.log(err);
      }
      );
    }

  }
  getMatPers(event:any){

    this.serverName=(<HTMLInputElement>event);
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq' + event);

  }
   fetchCessionPers(){

   return this.http.get('http://192.168.2.94:8080/api/auth/getall')/*
    .pipe(map((responseData : any)=>{
      const  cessionsPersArray =[];
      for( const key  in responseData){
        cessionsPersArray.push({ ...responseData[key],id :key});
        
      }
    }))*/
    
  }
  fetchCession(id: any){

    return this.http.get('http://127.0.0.1:8080/api/auth/getbyid/'+this.username)/*
     .pipe(map((responseData : any)=>{
       const  cessionsPersArray =[];
       for( const key  in responseData){
         cessionsPersArray.push({ ...responseData[key],id :key});
         
       }
     }))*/
     
   }
  getgouv(){
    this.fetchCessionPers().subscribe(
      data => {
        this.list = data; 
        console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );
    
    
    
    }
    
}

  export interface CleCessionPers {
      cod_soc: string;
      mat_pers: string;
      cod_pret: number;
  }

  export interface cessionPers {
      selected: boolean;
      id: CleCessionPers;
      cod_etat_pret: string;
      typ_etat: string;
      cod_grp_pret: string;
      typ_pret: string;
      abrv_fixe?: any;
      org_pret: string;
      rib_pers?: any;
      prt_dat_dem: string;
      prt_mnt_dem: number;
      prt_mnt_glb: number;
      prt_dat_deb: string;
      prt_dat_fin: string;
      prt_ech: number;
      rem_men: number;
      dern_rem_men: number;
      prt_rendu: number;
      nbr_retenue: number;
      objet_pret?: any;
      objet_pret_a?: any;
      dat_saisie: string;
      cod_user: string;
      ordonnance: string;
      seq_ecrt?: any;
      ref_pret?: any;
      num_lot?: any;
      id_cession_pers?: any;
  }



