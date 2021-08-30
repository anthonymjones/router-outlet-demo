import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Brewery } from '../../../core/brewery';

@Component({
  selector: 'app-brewery-card',
  templateUrl: './brewery-card.component.html',
  styles: [
    `
      .card-container {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        padding: 1rem;
        border-bottom: 1px solid var(--porter);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreweryCardComponent {
  // @ts-ignore
  @Input() brewery: Brewery;
  @Output() breweryClicked = new EventEmitter<Brewery>();
}
