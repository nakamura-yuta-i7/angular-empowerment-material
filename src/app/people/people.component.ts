import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Person[];
  
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }
  
  getPeople(): void {
    this.peopleService.getPeople()
    .subscribe(people => this.people = people);
  }

}
