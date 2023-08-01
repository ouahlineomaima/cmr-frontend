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
  childOrder: number = 1;
  

  constructor() { }
}
