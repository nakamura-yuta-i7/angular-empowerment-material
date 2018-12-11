import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PeopleService {
 
  private peopleUrl = 'api/people';  // URL to web api
 
  constructor(
    private http: HttpClient
  ) { }
  
  getPeople (): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl)
      .pipe(
        tap(people => this.log(`fetched people`)),
        catchError(this.handleError('getPeople', []))
      );
  }
  
  getPersonNo404<Data>(id: number): Observable<Person> {
    const url = `${this.peopleUrl}/?id=${id}`;
    return this.http.get<Person[]>(url)
      .pipe(
        map(people => people[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} person id=${id}`);
        }),
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
  }
  
  getPerson(id: number): Observable<Person> {
    const url = `${this.peopleUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }
  
  searchPeople(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty person array.
      return of([]);
    }
    return this.http.get<Person[]>(`api/people/?name=${term}`).pipe(
      tap(_ => this.log(`found people matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchPeople', []))
    );
  }
 
  //////// Save methods //////////
 
  /** POST: add a new person to the server */
  addPerson (person: Person): Observable<Person> {
    return this.http.post<Person>(this.peopleUrl, person, httpOptions).pipe(
      tap((person: Person) => this.log(`added person w/ id=${person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }
 
  /** DELETE: delete the person from the server */
  deletePerson (person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.peopleUrl}/${id}`;
 
    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }
 
  /** PUT: update the person on the server */
  updatePerson (person: Person): Observable<any> {
    return this.http.put(this.peopleUrl, person, httpOptions).pipe(
      tap(_ => this.log(`updated person id=${person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }
 
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
 
  /** Log a PersonService message with the MessageService */
  private log(message: string) {
    console.log("PeopleService: " + message);
  }
}