import {HEROESLIST} from './hero-data';
import {Injectable} from 'angular2/core';

@Injectable()

export class HeroService {
  getHeros() {
    return HEROESLIST;
  }
}
