import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template:
  `
  <div *ngIf="hero">
    <h2>Details for: {{ hero.name }}</h2>
    <div><label>ID: </label>{{ hero.id }}</div>
    <div>
      <label>Name:</label> {{ hero.name }}
      <div><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
  </div>

  `,
  inputs: ['hero']
})

export class HeroDetailComponent {

  public hero: Hero;

}
