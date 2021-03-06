import { NationalityService } from './services/nationality.service';
import { Component } from '@angular/core';
import * as L from 'leaflet';
import { Map } from 'leaflet';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  location = [37.9892407, -0.7125763];
  select;
  params: URLSearchParams = new URLSearchParams();
  center = [37.9892407, -0.7125763];
  val = 100;
  title = 'Nazona';
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
    ],
    center: [0, 0],
    zoom: 13,
  };
  nationalities = null;
  n_results: number = -1;
  markers = new Array();
  private _map;
  loading:boolean = false;

  constructor(private nationalityService: NationalityService, private http: HttpClient) {

  }

  /*
  * Cuando se inicializa el componente de la aplicación
  */
  ngOnInit() {
    //Comprobamos si la geolocalización está disponible
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = [position.coords.latitude, position.coords.longitude];
        console.log(position.coords);
      });
    }
    else {
      this.location = [37.9892407, -0.7125763]; //Posición por defecto en Torrevieja
    }

    //Fijamos el centro inicial
    this.center = this.location;

    //Configuramos las opciones del mapa
    this.options.center = this.center;

    // this.getNationalities()
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.nationalities = data;
      this.select = data[10].name;
    });
  }

  /*
  * Comprueba si tiene que mostrar el número de resultados
  */
  isNResultsVisible() {
    return (this.n_results != -1)
  }

  /*
  * UpdateResults
  */
  updateMap() {
    this.n_results = 0;
  }

  /*
  * Inicializamos los datos del mapa cuando están listos
  */
  onMapReady($event) {
    this._map = $event;
  }

  search(nat, type) {
    this.loading = true;
    console.log(nat);
    console.log(type);
    if (nat && type) {
      this.http.get('http://localhost:3000/search', { params: { type: type, nat: nat } }).subscribe((data:any) => {
        this.n_results = data.results.length;
        data.results.forEach(item => {
          this.removeMarkers();
          this.addMarker(item);
        });
        this.loading = false;
      });
    }
  }

  addMarker(item) {
    let marker = L.marker([item.geometry.location.lat, item.geometry.location.lng], {
      icon: L.icon({
        iconSize: [50, 50],
        iconAnchor: [1, 1],
        iconUrl: 'assets/marker-image.png',
        shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
      })
    });
    marker.addTo(this._map)
      .bindPopup(item.name)
    marker.bindTooltip(item.name);
    this.markers.push(marker);
  }

  removeMarkers(){
    for(let i=0;i<this.markers.length;i++) {
      this._map.removeLayer(this.markers[i]);
    }  
  }

}
