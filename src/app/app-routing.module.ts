import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AnimalDetailComponent }  from './animal-detail/animal-detail.component';
import { AddAnimalComponent }  from './add-animal/add-animal.component';
import { MessagesComponent } from './messages/messages.component';
import { AnimalSearchComponent} from './animal-search/animal-search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'detail/:id', component: AnimalDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'search', component: AnimalSearchComponent },
  { path: 'add', component: AddAnimalComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'form', component:  AnimalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
