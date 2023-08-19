import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
import { ChoixSimulationComponent } from './pages/choix-simulation/choix-simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimulationEnLigneComponent } from './pages/simulation-en-ligne/simulation-en-ligne.component';
import { SimulationTelephoniqueComponent } from './pages/simulation-telephonique/simulation-telephonique.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { MatDatepickerToggleIcon } from '@angular-material-components/datetime-picker';



const appRoutes : Routes = [
  {path:'', redirectTo:'choix-langue', pathMatch:'full'},
  {path:'choix-langue', component:ChoixLangueComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},
  {path:'resultat', component:ResultatComponent},
  {path:'simulation-en-ligne', component:SimulationEnLigneComponent},
  {path:'choix-simulation', component:ChoixSimulationComponent},
  {path:'simulation-telephonique', component:SimulationTelephoniqueComponent}

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
    ChoixSimulationComponent,
    SimulationEnLigneComponent,
    SimulationTelephoniqueComponent,
    DateTimePickerComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
