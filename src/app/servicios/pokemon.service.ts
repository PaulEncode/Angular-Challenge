import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) { }

  

  public getPokemon(urlApi:string){
    return this.http.get(urlApi);
  }

  public getDetallePokemon(url:string){
    return this.http.get(url);
  }

}
