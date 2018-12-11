import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { environment } from '../environments/environment';
import { config } from './app.config';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { ROLES } from './app.roles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.appTitle;
  pages = config.pages;
  accountMenuIsOpend: Boolean = false;
  
  constructor(
    private permissionsService: NgxPermissionsService,
    private translate: TranslateService,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher
  ) {
    this.initLang();
    this.initSnav();
    this.loadPermissionFromLocalStorage();
  }
  ROLE_STRINGS = ROLES
  roleGenaf: boolean;
  roleAdmin: boolean;
  loadPermissionFromLocalStorage() {
    var roles = localStorage.ROLE ? JSON.parse(localStorage.ROLE) : [];
    if (localStorage.ROLE) {
      this.roleGenaf = roles.includes(ROLES.GENAF);
      this.roleAdmin = roles.includes(ROLES.ADMIN);
    }
    this.permissionsService.loadPermissions(roles);
    console.log("roles: ", roles);
  }
  setRole() {
    var roles = [];
    if (this.roleGenaf) roles.push(ROLES.GENAF);
    if (this.roleAdmin) roles.push(ROLES.ADMIN);
    localStorage.ROLE = JSON.stringify(roles);
    this.permissionsService.loadPermissions(roles);
    console.log("roles: ", roles);
  }
  
  
  private _mobileQueryListener: () => void;
  private mobileQuery: MediaQueryList;
  private snavIsOpend: Boolean = false;
  snavToggle() {
    localStorage.setItem("snavIsOpend", JSON.stringify((!this.snavIsOpend)) );
  }
  initSnav() {
    this.snavIsOpend = JSON.parse(localStorage.getItem("snavIsOpend"));
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  
  private lang: string;
  initLang() {
    this.translate.setDefaultLang('en');
    this.useLang(
      localStorage.getItem("lang")
      || this.translate.getBrowserLang()
    );
  }
  useLang(lang="ja"): void {
    this.translate.use( this.canonicalizeLang(lang) );
    this.lang = this.translate.currentLang;
  }
  canonicalizeLang(lang="ja"): string {
    return lang == "ja" ? "ja" : "en";
  }
  setLang(lang="ja"): void {
    localStorage.setItem("lang", lang);
    this.useLang(lang);
  }
}
