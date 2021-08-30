import { Component } from '@angular/core';
import { BreweriesFacade } from '../breweries.facade';

@Component({
  selector: 'app-list',
  template: `
    <ng-container *ngFor="let brewery of breweries.all$ | async">
      <app-brewery-card
        [brewery]="brewery"
        (breweryClicked)="breweries.selectBrewery($event.id)"
      ></app-brewery-card>
    </ng-container>
  `,
})
export class ListComponent {
  constructor(public breweries: BreweriesFacade) {}
}
