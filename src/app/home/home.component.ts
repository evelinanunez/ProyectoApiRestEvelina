import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Character } from './models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  characters : any[] = [];
 
  charactersInfo: any[] = [];

  proximaPagina : string ='';

  anteriorPagina : string = '';

 

  constructor( private servicioApi : ApiService){
  
   
  }
  
  ngOnInit(): void {
    this.llenarDataResults();

  }
  llenarDataResults() : void{
    this.servicioApi.getCharacters().subscribe(data =>{
      this.characters= data.results;
      this.proximaPagina= data.info.next;
      this.anteriorPagina= data.info.prev;
      console.log("Primera carga",this.characters, this.proximaPagina,this.anteriorPagina);
    })
  }

  verPagina(url :string) : void {
    if(url === null){
      this.llenarDataResults();
    }else{
      this.servicioApi.getPagina(url).subscribe(data =>{
        this.characters= data.results;
        this.proximaPagina= data.info.next;
        this.anteriorPagina= data.info.prev;
        console.log("Pagina Actual cargada",this.characters, this.proximaPagina,this.anteriorPagina);
      })
    }
   
  }

  obtenerBgColor (status : string) :string{
    switch (status) {
      case 'Alive':
        case 'Alive':
          return 'text-bg-success';
        case 'Dead':
          return 'text-bg-danger';
        default:
          return 'text-bg-dark';
      }
    }
  

}
