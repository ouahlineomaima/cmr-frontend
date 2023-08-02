import { Injectable } from '@angular/core';
import { SimulationType } from '../enums/SimulationType';


export interface Child{
  name: string;
  dateOfBirth: string | null;
  isCurrentlyStudying: boolean | null;
  marialStatus: String | null;
  isInfirm: boolean | null;
  infirmityType: string | null;
  
}

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
  childOrder: number = 0;
  isStillPartner: boolean | null = null;
  isPartnerAlive: boolean | null = null;
  isPartnerInfirm: boolean | null = null;
  isPartnerRetired: boolean | null = null;
  partnerMarialStatus: string | null = null;
  partnerSexe: string | null = null;
  

  constructor() { }
}
