import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BreweryCardComponent } from './breweries/list/brewery-card/brewery-card.component';
import { ListComponent } from './breweries/list/list.component';
import { SearchComponent } from './breweries/search/search.component';
import { PhonePipe } from './core/pipes/phone.pipe';
import { PrettyUrlPipe } from './core/pipes/pretty-url.pipe';
import { MapComponent } from './map/map.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BreweriesComponent,
    SearchComponent,
    ListComponent,
    BreweryCardComponent,
    PhonePipe,
    PrettyUrlPipe,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
