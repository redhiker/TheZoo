import { Component, OnInit, Input } from '@angular/core';

import { Animal } from '../animal';
import { OptionItem } from '../optionItem';
import { AnimalService } from '../animal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  @Input() newAnimal: Animal;

  public animalTypes: OptionItem[] = [
    {value: '', display: '--'},
    {value: 'MAMMAL', display: 'Mammal'},
    {value: 'BIRD', display: 'Bird'},
    {value: 'INSECT', display: 'Insect'}
  ];

  animals: Animal[];

  constructor(private animalService: AnimalService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  addAnimal(kind: string, name: string, note: string, type: string): void {
    this.messageService.add('Input: '+ type + ' ' + kind + ' ' + name + ' ' + note);
    
    this.newAnimal = new Animal(null, name, kind, type, note);

    this.animalService.addAnimal(this.newAnimal)
      .subscribe(animal => {
        this.animals.push(this.newAnimal);
    });
  }

}
