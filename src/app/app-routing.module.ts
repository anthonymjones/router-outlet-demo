import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweriesComponent } from './breweries/breweries.component';
import { ListComponent } from './breweries/list/list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'breweries',
  },
  {
    path: 'breweries',
    component: BreweriesComponent,
    children: [
      { path: 'list', component: ListComponent, outlet: 'left' },
      { path: 'map', component: MapComponent, outlet: 'right' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
