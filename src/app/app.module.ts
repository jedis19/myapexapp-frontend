import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { CharactersComponent } from './components/characters/characters.component';
import { TruncatePipe } from './pipes/truncatepipe.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeaponsComponent,
    CharactersComponent,
    TruncatePipe,
    AttachmentsComponent,
    MainpageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
