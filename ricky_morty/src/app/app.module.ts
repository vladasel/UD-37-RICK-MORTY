import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersComponent } from './characters/characters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule,HttpClient} from '@angular/common/http';
import { SeeMoreComponent } from './see-more/see-more.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { UpdateCharacterComponent } from './update-character/update-character.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    AboutComponent,
    HomeComponent,
    SeeMoreComponent,
    AddCharacterComponent,
    UpdateCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
