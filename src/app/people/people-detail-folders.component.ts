import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-detail-folders',
  template: `
  <div style="padding:15px;">
    <div class="example-container mat-elevation-z1">
      <mat-table #table [dataSource]="dataSource">
        
        <!-- Position Column -->
        <ng-container matColumnDef="position">
          <mat-header-cell *matHeaderCellDef style="flex: 0 0 75px;"> No. </mat-header-cell>
          <mat-cell *matCellDef="let element" style="flex: 0 0 75px;"> {{element.position}} </mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef> Folder Name </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
        
      </mat-table>
    </div>
  </div>
  `,
  styles: []
})
export class PeopleDetailFoldersComponent implements OnInit {
  displayedColumns = ['position', 'name'];
  dataSource: Element[] = [
    {position: 1, name: 'Hydrogen', },
    {position: 2, name: 'Helium', },
    {position: 3, name: 'Lithium', },
    {position: 4, name: 'Beryllium', },
    {position: 5, name: 'Boron', },
    {position: 6, name: 'Carbon', },
    {position: 7, name: 'Nitrogen', },
    {position: 8, name: 'Oxygen', },
    {position: 9, name: 'Fluorine', },
    {position: 10, name: 'Neon', },
    {position: 11, name: 'Sodium', },
    {position: 12, name: 'Magnesium', },
    {position: 13, name: 'Aluminum', },
    {position: 14, name: 'Silicon', },
    {position: 15, name: 'Phosphorus', },
    {position: 16, name: 'Sulfur', },
    {position: 17, name: 'Chlorine', },
    {position: 18, name: 'Argon', },
    {position: 19, name: 'Potassium', },
    {position: 20, name: 'Calcium', },
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Element {
  position: number;
  name: string;
}