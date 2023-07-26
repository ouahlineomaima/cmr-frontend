import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ChoixLangueComponent } from './pages/choix-langue/choix-langue.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { TimelineComponent } from './components/timeline/timeline.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'choixLangue', pathMatch:'full'},
  {path:'choixLangue', component:ChoixLangueComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    ChoixLangueComponent,
    AccueilComponent,
    ContactComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
