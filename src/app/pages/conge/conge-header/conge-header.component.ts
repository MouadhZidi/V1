import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-conge-header',
  templateUrl: './conge-header.component.html',
  styleUrls: ['./conge-header.component.css'],
})
export class CongeHeaderComponent implements OnInit {
  nom:any
  prenom:any
  constructor(private serv:ApiService) {}

  ngOnInit() {
    this.getnom()
    this.getprenom()
  }
  getnom(){
    this.serv.getNom().subscribe(
      (data: any) => {
        this.nom = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getprenom(){
    this.serv.getPrenom().subscribe(
      (data: any) => {
        this.prenom = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
