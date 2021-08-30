import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {Brewery} from './brewery';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  constructor(private http: HttpClient) {
  }

  searchBreweries(searchTerm: string): Observable<Brewery[]> {
    return this.http
      .get<Brewery[]>(
        `${environment.apiUrl}search?query=${searchTerm}`
      )
      .pipe(map(response => response));
  }
}
