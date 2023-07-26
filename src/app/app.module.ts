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
import { ResultBoxOnlineComponent } from './components/result-box-online/result-box-online.component';
import { ResultatComponent } from './pages/resultat/resultat.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'choixLangue', pathMatch:'full'},
  {path:'choixLangue', component:ChoixLangueComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},
  {path:'resultat', component:ResultatComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    ChoixLangueComponent,
    AccueilComponent,
    ContactComponent,
    TimelineComponent,
    ResultBoxOnlineComponent,
    ResultatComponent,
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
