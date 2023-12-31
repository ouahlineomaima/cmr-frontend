import { Injectable } from '@angular/core';
import { SimulationType } from '../enums/SimulationType';
import { Child } from '../interfaces/child';
import { Reservation } from '../interfaces/reservation';


@Injectable({
  providedIn: 'root'
})



export class SharedVariablesService {
  cin: string = '';
  tel: string = '';
  userRelationship: string = '';
  simulationType!: SimulationType;
  isRetired: boolean | null = null;
  hasChildren: boolean | null = null;
  isValidMarriagePeriod: boolean | null = null;
  children: Array<Child> = [];
  childOrder: number = 1;
  isStillPartner: boolean | null = null;
  isPartnerAlive: boolean | null = null;
  isPartnerInfirm: boolean | null = null;
  isPartnerRetired: boolean | null = null;
  partnerMarialStatus: string | null = null;
  partnerSexe: string | null = null;
  reservations: Array<Reservation>=[]
  
  constructor() { }
}
