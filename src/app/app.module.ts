import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { NgxPermissionsModule } from 'ngx-permissions';

import { CdkTableModule } from '@angular/cdk/table';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppMaterials } from './app.materials';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { PeopleDetailComponent } from './people/people-detail.component';
import { PeopleDetailDefaultComponent } from './people/people-detail-default.component';
import { PeopleDetailFoldersComponent } from './people/people-detail-folders.component';
import { PeopleDetailGroupsComponent } from './people/people-detail-groups.component';
import { PeopleDetailAdComponent } from './people/people-detail-ad.component';
import { PeopleDetailPasswordsComponent } from './people/people-detail-passwords.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CorporationsComponent } from './corporations/corporations.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StatusesComponent } from './statuses/statuses.component';
import { AffairsComponent } from './affairs/affairs.component';
import { HikarieCardsComponent } from './hikarie-cards/hikarie-cards.component';
import { CardsComponent } from './cards/cards.component';
import { SystemComponent } from './system/system.component';
import { AclComponent } from './acl/acl.component';
import { BackgroundComponent } from './background/background.component';
import { NoAuthorizationComponent } from './no-authorization.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PeopleComponent,
    PeopleDetailComponent,
    PeopleDetailDefaultComponent,
    PeopleDetailFoldersComponent,
    PeopleDetailGroupsComponent,
    PeopleDetailAdComponent,
    PeopleDetailPasswordsComponent,
    OrganizationsComponent,
    CorporationsComponent,
    DepartmentsComponent,
    StatusesComponent,
    AffairsComponent,
    HikarieCardsComponent,
    CardsComponent,
    SystemComponent,
    AclComponent,
    BackgroundComponent,
    NoAuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    CdkTableModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        delay: 100,
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    ),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    NgxPermissionsModule.forRoot(),
  ].concat(AppMaterials),
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
