import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonSharedService {
  sharedPerson: Observable<Person>;
}
