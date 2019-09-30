import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {  

  animals: Animal[];

  constructor(private animalService: AnimalService) { }

  getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  ngOnInit() {
    this.getAnimals();
  }

  delete(animal: Animal): void {
    this.animals = this.animals.filter(h => h !== animal);
    this.animalService.deleteAnimal(animal).subscribe();
  }

}
