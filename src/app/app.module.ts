import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

// import {NgModule} from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


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
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { LayerComponent } from './components/layer/layer.component';
import { EventComponent } from './components/event/event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventPackComponent } from './components/event-pack/event-pack.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SimulationTelephoniqueComponent } from './pages/simulation-telephonique/simulation-telephonique.component';



const appRoutes : Routes = [
  {path:'', redirectTo:'choixLangue', pathMatch:'full'},
  {path:'choixLangue', component:ChoixLangueComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},
  {path:'resultat', component:ResultatComponent},
  {path:'simulation-en-ligne', component:SimulationEnLigneComponent},
  {path:'choix-simulation', component:ChoixSimulationComponent},
  {path:'parcours', component:ParcoursComponent},
  {path:'simulation-telephonique', component:SimulationTelephoniqueComponent},
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
    ParcoursComponent,
    LayerComponent,
    EventComponent,
    EventDetailsComponent,
    EventPackComponent,
    EventsListComponent,
    SimulationTelephoniqueComponent,

    
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
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    CommonModule,
    NgxMaterialTimepickerModule,

    
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
