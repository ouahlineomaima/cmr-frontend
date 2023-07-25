import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ChoixLangueComponent } from './pages/choix-langue/choix-langue.component';
import { EligibiliteComponent } from './pages/eligibilite/eligibilite.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

const appRoutes : Routes = [
  {path:'', redirectTo:'ChoixLangue', pathMatch:'full'},
  {path:'ChoixLangue', component:ChoixLangueComponent},
  {path:'eligibilite', component:EligibiliteComponent},
  {path:'contact', component:ContactComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    ChoixLangueComponent,
    EligibiliteComponent,
    ContactComponent
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
