import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Brewery } from '../core/brewery';
import { BreweryService } from '../core/brewery.service';

@Injectable({ providedIn: 'root' })
export class BreweriesFacade {
  breweries$$ = new ReplaySubject<Brewery[]>();
  all$: Observable<Brewery[]> = this.breweries$$.asObservable();
  selectedBrewery$$ = new ReplaySubject<Brewery>();
  current$: Observable<Brewery> = this.selectedBrewery$$.asObservable();

  constructor(private breweryService: BreweryService, private router: Router) {}

  getBreweries(searchTerm: string): void {
    this.breweryService.searchBreweries(searchTerm).subscribe((breweries) => {
      this.breweries$$.next(breweries);
      this.all$
        .pipe(
          tap(() =>
            this.router.navigate([
              'breweries',
              {
                outlets: {
                  left: ['list'],
                  right: ['map'],
                },
              },
            ])
          )
        )
        .subscribe();
    });
  }

  selectBrewery(id: number): void {
    this.all$
      .pipe(
        map((breweries) => breweries?.find((brewery) => brewery.id === id)),
        filter((foundBrewery) => !!foundBrewery),
        map((foundBrewery) => this.selectedBrewery$$.next(foundBrewery))
      )
      .subscribe();
  }
}
