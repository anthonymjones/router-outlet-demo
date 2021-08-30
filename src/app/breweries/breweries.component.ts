import { Component } from '@angular/core';
import { BreweriesFacade } from './breweries.facade';

@Component({
  selector: 'app-breweries',
  template: `
    <div class="search-container">
      <app-search (termEntered)="breweries.getBreweries($event)"></app-search>
    </div>

    <div class="results-and-details">
      <div class="left-bar">
        <router-outlet
          name="left"
          (activate)="logActivation($event)"
          (deactivate)="logDeactivation($event)"
        ></router-outlet>
      </div>
      <div class="map-container">
        <router-outlet
          name="right"
          (activate)="logActivation($event)"
          (deactivate)="logDeactivation($event)"
        ></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./breweries.component.scss'],
})
export class BreweriesComponent {
  constructor(public breweries: BreweriesFacade) {}

  logActivation(event: any): void {
    console.log('logging activation', event);
  }

  logDeactivation(event: any): void {
    console.log('logging deactivation', event);
  }
}
