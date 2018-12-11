import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PeopleDetailDefaultComponent } from './people/people-detail-default.component';
import { PeopleDetailFoldersComponent } from './people/people-detail-folders.component';
import { PeopleDetailGroupsComponent } from './people/people-detail-groups.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people/people-detail.component';
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
import { NgxPermissionsGuard } from 'ngx-permissions';

const createPermissionParam = (only) => {
  return {
    only: only,
    redirectTo: {
      navigationCommands: ['/404'],
      navigationExtras: { skipLocationChange: true }
    },
  };
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NoAuthorizationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent},
  { path: 'people/detail/:id', component: PeopleDetailComponent, children: [
    { path: '', redirectTo: "basic", pathMatch: 'full' },
    { path: 'basic', component: PeopleDetailDefaultComponent },
    { path: 'folders', component: PeopleDetailFoldersComponent },
    { path: 'groups', component: PeopleDetailGroupsComponent },
    { path: 'ad-info', component: PeopleDetailAdComponent },
    { path: 'passwords', component: PeopleDetailPasswordsComponent },
  ]}, 
  { path: "organizations", component: OrganizationsComponent },
  { path: "corporations", component: CorporationsComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "statuses", component: StatusesComponent },
  { path: "affairs", component: AffairsComponent },
  { path: "hikarie-cards", component: HikarieCardsComponent },
  { path: "cards", component: CardsComponent },
  { path: "system", component: SystemComponent, canActivate: [NgxPermissionsGuard],
    data: { permissions: createPermissionParam(['ADMIN']), } },
  { path: "acl", component: AclComponent, canActivate: [NgxPermissionsGuard],
    data: { permissions: createPermissionParam(['ADMIN']), } },
  { path: "background", component: BackgroundComponent, canActivate: [NgxPermissionsGuard],
    data: { permissions: createPermissionParam(['ADMIN']), } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
