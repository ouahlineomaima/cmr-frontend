import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmr-wassini';
  //this variable is used for the timeline to set the classnames of the steps (a step can be either current-item, comming or done)
  classNamesForTimeline: Array<string> = ['current-item', 'comming', 'comming'];
}
