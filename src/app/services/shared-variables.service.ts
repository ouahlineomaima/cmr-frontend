import { Injectable } from '@angular/core';
import { SimulationType } from '../enums/SimulationType';

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

  constructor() { }
}
