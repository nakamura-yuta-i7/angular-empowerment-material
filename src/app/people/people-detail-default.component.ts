import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person';
import { PeopleDetailComponent } from './people-detail.component';
import { PersonSharedService } from './person-shared.service';

@Component({
  selector: 'app-people-detail-default',
  template: `
    <mat-list>
      <h3 mat-subheader>{{'PERSON.DETAIL.DEFAULT.STATUS-HISTORIES' | translate}}</h3>
      <mat-list-item *ngFor="let sh of person?.statusHistories">
        <mat-icon mat-list-icon>keyboard_arrow_right</mat-icon>
        <h4 mat-line>
          {{sh.corporation}}
          {{sh.isCorpEmployer ? "("+ ('PERSON.DETAIL.DEFAULT.EMPLOYER' | translate) +")" : ""}}
        </h4>
        <p mat-line>
          {{sh.start_date}}({{sh.start_date_effective}}) ~ 
          {{sh.end_date}}{{sh.end_date_effective ? "("+sh.end_date_effective+")" : ""}}
        </p>
      </mat-list-item>
      
      <h3 mat-subheader>{{'PERSON.DETAIL.DEFAULT.POSITION-HISTORIES' | translate}}</h3>
      <mat-list-item *ngFor="let ph of person?.positionHistories">
        <mat-icon mat-list-icon>keyboard_arrow_right</mat-icon>
        <h4 mat-line>{{ph.department_fullname}} {{ph.title ? "("+ph.title+")" : ""}}</h4>
        <p mat-line>
          {{ph.start_date}}({{ph.start_date_effective}}) ~ 
          {{ph.end_date}}{{ph.end_date_effective ? "("+ph.end_date_effective+")" : ""}}
        </p>
      </mat-list-item>
    </mat-list>
    
    
  `,
  styles: [`
  .mat-subheader {
    padding-bottom: 0;
  }
  h4.mat-line {
    font-size: 15px !important;
    font-weight: 100 !important;
  }
  `]
})
export class PeopleDetailDefaultComponent implements OnInit {
  @Input() person: Person;
  
  constructor(
    private personSharedService: PersonSharedService
  ) {}

  ngOnInit() {
    this.personSharedService.sharedPerson
    .subscribe(person => this.person = person );
  }

}
