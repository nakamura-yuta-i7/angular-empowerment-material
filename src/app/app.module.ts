import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppMaterials } from './app.materials';


@NgModule({
  declarations: [
    AppComponent
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
  ].concat(AppMaterials),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
