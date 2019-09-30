import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  //date = new FormControl(new  Date());

  date: Date;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  save(): void {
    this.messageService.add('Selected Date: ' + this.date.toDateString());
  }

}
