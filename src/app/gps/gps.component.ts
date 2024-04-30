
import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
})
export class GpsComponent implements OnInit {
  public position: any = null;

  constructor(private geoService: GeolocationService) { }

  ngOnInit() {
    this.geoService.getCurrentPosition().then(pos => {
      this.position = pos;
    }).catch(err => {
      console.error('Error getting location', err);
    });
  }
}
