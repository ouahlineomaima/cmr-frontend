import { Component, Input } from '@angular/core';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';

@Component({
  selector: 'app-result-box-online',
  templateUrl: './result-box-online.component.html',
  styleUrls: ['./result-box-online.component.css']
})
export class ResultBoxOnlineComponent {

  @Input() childrenPourcentage: number = 0;
  @Input() partnerPourcentage: number = 0;
  @Input() childrenNames: string[] = [];


  constructor(public sharedVariablesService: SharedVariablesService) {}

}
