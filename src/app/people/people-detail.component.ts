import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from './person';
import { PeopleService } from './people.service';
import { config } from '../app.config';
import { PersonSharedService } from './person-shared.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
  providers: [PersonSharedService]
})
export class PeopleDetailComponent implements OnInit {
  @Input() person: Person;
  
  navLinks = [
    { path: "basic",     label: "PERSON.DETAIL.NAV-LINKS.BASIC", },
    { path: "folders",   label: "PERSON.DETAIL.NAV-LINKS.FOLDER", },
    { path: "groups",    label: "PERSON.DETAIL.NAV-LINKS.GROUPS", },
    { path: "ad-info",   label: "PERSON.DETAIL.NAV-LINKS.AD-INFO", },
    { path: "passwords", label: "PERSON.DETAIL.NAV-LINKS.PASSWORD", },
  ];
  
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location,
    private personSharedService: PersonSharedService
  ) {}

  ngOnInit(): void {
    this.getPerson();
  }
  
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    (this.personSharedService.sharedPerson = this.peopleService.getPerson(id))
    .subscribe(person => this.person = person );
  }

}
