import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `<h2>Find a Brewery</h2>
    <p>Start typing to search for Breweries:</p>

    <div class="search">
      <input type="text" [formControl]="searchTerm" placeholder="Search..." />
    </div> `,
  styles: [
    `
      input {
        height: 20px;
        width: 230px;
        padding: 10px;
        font-size: large;
        background-color: var(--lager);
        color: var(--porter);
        border: none;
      }

      .search {
        margin-top: 15px;
      }
    `,
  ],
})
export class SearchComponent implements OnDestroy, OnInit {
  @Output() termEntered = new EventEmitter<string>();

  destroy$ = new Subject();
  searchTerm = new FormControl('');

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe((value) => value.length && this.termEntered.emit(value));
  }
}
