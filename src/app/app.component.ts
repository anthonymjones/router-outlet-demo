import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-toolbar></app-toolbar>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>© 2021 BrewFinder</footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      main {
        display: flex;
        flex-grow: 1;
        margin-top: 82px;
      }

      footer {
        background-color: var(--lager);
        padding: 1em;
      }
    `,
  ],
})
export class AppComponent {}
