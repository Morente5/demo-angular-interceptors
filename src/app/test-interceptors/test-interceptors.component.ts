import { Component } from '@angular/core';
import { SwapiService } from '../core/services/swapi.service';
import { PokeapiService } from '../core/services/pokeapi.service';

@Component({
  selector: 'app-test-interceptors',
  templateUrl: './test-interceptors.component.html',
  styleUrls: ['./test-interceptors.component.scss'],
})
export class TestInterceptorsComponent {

  people = [];
  planets = [];
  pokemon = [];
  berries = [];


  constructor(
    private readonly swapi: SwapiService,
    private readonly pokeapi: PokeapiService,
  ) { }

  searchPeople() {
    this.swapi.getPeople$().subscribe(people => {
      this.people = people;
    });
  }
  searchPlanets() {
    this.swapi.getPlanets$().subscribe(planets => {
      this.planets = planets;
    });
  }
  searchPokemon() {
    this.pokeapi.getPokemon$().subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
  searchBerries() {
    this.pokeapi.getBerries$().subscribe(berries => {
      this.berries = berries;
    });
  }
  searchBerriesError() {
    this.pokeapi.getBerriesError$().subscribe();
  }

}
