import { Injectable } from '@angular/core';
import { SimulationType } from '../enums/SimulationType';


export interface Child{
  dateOfBirth: Date;
  isCurrentlyStudying: boolean;
  marialStatus: String;
  isInfirm: boolean;
  infirmityType: string;
  
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
  childOrder: number = 1;
  

  constructor() { }
}
