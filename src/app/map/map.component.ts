import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { BreweriesFacade } from '../breweries/breweries.facade';

@Component({
  selector: 'app-map',
  template: '<div class="map match-parent" id="map"></div>',
  styles: [
    `
      .match-parent {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  // @ts-ignore
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.0902;
  lng = -95.7129;

  constructor(private breweries: BreweriesFacade, private http: HttpClient) {}

  ngOnInit(): void {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 3,
      center: [this.lng, this.lat],
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.breweries.current$.pipe().subscribe((selectedBrewery) => {
      if (selectedBrewery.longitude && selectedBrewery.latitude) {
        new mapboxgl.Marker()
          .setLngLat([+selectedBrewery.longitude, +selectedBrewery.latitude])
          .addTo(this.map);

        this.map
          .setCenter([+selectedBrewery.longitude, +selectedBrewery.latitude])
          .setZoom(15);
      } else if (selectedBrewery.name) {
        this.http
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${selectedBrewery.name}.json?access_token=${environment.mapbox.accessToken}`
          )
          .subscribe((response: any) => {
            const bestMatch = response.features[0];

            const {
              0: longitude,
              1: latitude,
            } = bestMatch.geometry.coordinates;

            new mapboxgl.Marker()
              .setLngLat([longitude, latitude])
              .addTo(this.map);

            this.map.setCenter([longitude, latitude]).setZoom(15);
          });
      }
    });
  }
}
