import { NationalityService } from './services/nationality.service';
import { Component } from '@angular/core';
import * as L from 'leaflet';
import { Map } from 'leaflet';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 35, attribution: '...' })
    ],
    zoom: 14,
    center: L.latLng([37.984700, -0.680823])
  };

  public nationalities;

  constructor(private nationalityService: NationalityService, private http: HttpClient) {
    
  }

  ngOnInit() {
    // this.getNationalities()
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.nationalities = data;
    });
  }

  // getNationalities() {
  //   this.nationalityService.get()
  //   .subscribe(nats => this.nationalities);
  // }

}
