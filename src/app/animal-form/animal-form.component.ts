import { Component, OnInit } from '@angular/core';

import { Animal } from '../animal';
import { OptionItem } from '../optionItem';
import { AnimalService } from '../animal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

  constructor(private animalService: AnimalService,
    private messageService: MessageService) { }

  public animalTypes: OptionItem[] = [
    {value: '', display: '--'},
    {value: 'MAMMAL', display: 'Mammal'},
    {value: 'BIRD', display: 'Bird'},
    {value: 'INSECT', display: 'Insect'}
  ];

  animals: Animal[];

  model = new Animal(null, '', '', '', '');

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.messageService.add('on submit...'+this.model.name + ' '+this.model.type);
    this.animalService.addAnimal(this.model)
      .subscribe(animal => {
        this.animals.push(this.model);
    });
  }

}
