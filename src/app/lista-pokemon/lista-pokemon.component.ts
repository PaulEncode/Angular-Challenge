import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../servicios/pokemon.service';
import { iInfoPokemon } from '../interface';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  constructor(private servicePokemon: PokemonService) { }

  //====================VARIABLES====================
  private consultaApiPokemon = "https://pokeapi.co/api/v2/pokemon";
  info: iInfoPokemon = { count: 0, next: '', previous: '', results: [{ name: '', url: '' }] };
  detallePokemon: any = {};
  image: string = '';
  movesCount: number = 0;

  //====================FUNCIONES====================
  ngOnInit(): void {
    this.getListaPokemon(this.consultaApiPokemon);
  }

  getListaPokemon(urlApi: string) {
    this.servicePokemon.getPokemon(urlApi).subscribe(data => {
      this.info = <iInfoPokemon>data;
    }, error => {
      console.log(error);
    }, () => {

    })
  }

  getDetallePokemon(url: string) {  
      this.servicePokemon.getDetallePokemon(url).subscribe(data => {
        this.detallePokemon = data;
        
      }, error => {
        console.log(error);
      }, () => {
        this.image = this.detallePokemon.sprites.front_default;
        this.movesCount = this.detallePokemon.moves.length;
      })
  }

  changeList(url: string): void {
    this.getListaPokemon(url);
  }

}


