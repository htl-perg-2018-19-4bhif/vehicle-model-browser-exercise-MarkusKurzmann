import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponentComponent } from './search-component/search-component.component';

import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule, MatSelectModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatPaginatorModule} from '@angular/material'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    AboutpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgxLoremIpsumModule
  ],
  exports: [
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [MatFormFieldModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
