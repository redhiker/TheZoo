import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';

import { FormsModule } from '@angular/forms';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalSearchComponent } from './animal-search/animal-search.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { MaterialModule } from './material.module';
import { CalendarComponent } from './calendar/calendar.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AnimalSearchComponent,
    AddAnimalComponent,
    CalendarComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns ssimulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
