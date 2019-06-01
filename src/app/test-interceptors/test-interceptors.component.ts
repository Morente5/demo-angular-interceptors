import { Component } from '@angular/core';
import { SwapiService } from '../core/services/swapi.service';
import { StapiService } from '../core/services/stapi.service';

@Component({
  selector: 'app-test-interceptors',
  templateUrl: './test-interceptors.component.html',
  styleUrls: ['./test-interceptors.component.scss'],
})
export class TestInterceptorsComponent {

  people = [];
  planets = [];
  animals = [];
  weapons = [];


  constructor(
    private readonly swapi: SwapiService,
    private readonly stapi: StapiService,
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
  searchAnimals() {
    this.stapi.getAnimals$().subscribe(animals => {
      this.animals = animals;
    });
  }
  searchWeapons() {
    this.stapi.getWeapons$().subscribe(weapons => {
      this.weapons = weapons;
    });
  }
  searchWeaponsError() {
    this.stapi.getWeaponsError$().subscribe();
  }

}
