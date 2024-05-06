import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Character } from '../home/models/character';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private urlApi = 'https://rickandmortyapi.com/api/character/1';
  constructor(private http : HttpClient) { }

  public getCharacters(): Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}/?page=1`);
  }

  public getPagina(url :string) : Observable<any>
  {
    return this.http.get<any>(url);
  }
}
