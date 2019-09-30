import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Animal } from './animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const animals = [
      new Animal(11, 'Wood Duck', 'Duck', 'Bird', '' ),
      new Animal(12, 'Mallard Duck', 'Duck', 'Bird', '' ),
      new Animal(13, 'Pintail Duck', 'Duck', 'Bird', '' ),
      new Animal(14, 'Great Blue Heron', 'Heron', 'Bird', '' ) ,
      new Animal(15, 'Bald Eagle', 'Eagle', 'Bird', '' ),
      new Animal(16, 'Pileated Woodpecker', 'Woodpecker', 'Bird', '' ),
      new Animal(17, 'Catbird', 'Songbird', 'Bird', '' )
    ];
    return {animals};
  }

  // Overrides the genId method to ensure that a animal always has an id.
  // If the animals array is empty,
  // the method below returns the initial number (11).
  // if the animals array is not empty, the method below returns the highest
  // animal id + 1.
  genId(animals: Animal[]): number {
    return animals.length > 0 ? Math.max(...animals.map(animal => animal.id)) + 1 : 11;
  }
}
