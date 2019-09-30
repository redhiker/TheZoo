import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Animal } from './animal';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private animalsUrl = 'api/animals';  // URL to web api

  getAnimals (): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl)
      .pipe(
        tap(_ => this.log('fetched animals from service')),
        catchError(this.handleError<Animal[]>('getAnimals', []))
      );
  }

  getAnimal(id: number): Observable<Animal> {
    // TODO: send the message _after_ fetching the animal
    const url = `${this.animalsUrl}/${id}`;
    return this.http.get<Animal>(url).pipe(
      tap(_ => this.log(`fetching animal id=${id}`)),
      catchError(this.handleError<Animal>(`getAnimal id=${id}`))
    );
  }

  /** PUT: update the animal on the server */
  updateAnimal (animal: Animal): Observable<any> {
    return this.http.put(this.animalsUrl, animal, this.httpOptions).pipe(
      tap(_ => this.log(`updated animal id=${animal.id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  /** DELETE: delete the animal from the server */
  deleteAnimal (animal: Animal | number): Observable<Animal> {
    const id = typeof animal === 'number' ? animal : animal.id;
    const url = `${this.animalsUrl}/${id}`;

    return this.http.delete<Animal>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted animal id=${id}`)),
      catchError(this.handleError<Animal>('deleteAnimal'))
    );
  }

  /** POST: add a new animal to the server */
  addAnimal (animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.animalsUrl, animal, this.httpOptions).pipe(
      tap((newAnimal: Animal) => this.log(`Added animal w/ id=${newAnimal.id} name=${newAnimal.name}`)),
      catchError(this.handleError<Animal>('addAnimal'))
    );
  }

  /* GET animals whose name contains search term */
  searchAnimals(term: string): Observable<Animal[]> {
    if (!term.trim()) {
      // if not search term, return empty animalS array.
      return of([]);
    }
    return this.http.get<Animal[]>(`${this.animalsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found animals matching "${term}"`)),
      catchError(this.handleError<Animal[]>('searchAnimals', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`AnimalService: ${message}`);
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
