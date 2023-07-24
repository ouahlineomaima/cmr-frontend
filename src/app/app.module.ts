import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantComponent } from './enfant/enfant.component';
import { ChoixLangueComponent } from './pages/choix-langue/choix-langue.component';

@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    ChoixLangueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
