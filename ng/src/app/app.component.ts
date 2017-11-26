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
export class AppComponent {
  location = [37.9892407, -0.7125763];
  center = [37.9892407, -0.7125763];
  title = 'Nazona';
  options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
      ],
      center: [0, 0],
      zoom: 13,
    };
  nationalities = null;

  constructor(private nationalityService: NationalityService, private http: HttpClient) {
    
  }

  /*
  * Cuando se inicializa el componente de la aplicación
  */
  ngOnInit()
  {
    //Comprobamos si la geolocalización está disponible
    if(navigator.geolocation)
    {
       navigator.geolocation.getCurrentPosition(position => {
         this.location = [position.coords.latitude, position.coords.longitude];
         console.log(position.coords); 
       });
    }
    else
    {
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
    });
  }

  /*
  * Inicializamos los datos del mapa cuando están listos
  */
  onMapReady($event){
    //SetCenter here

    //Marcador de prueba
    let marker = L.marker(this.location, {
      icon: L.icon({
         iconSize: [ 50, 50 ],
         iconAnchor: [ 1, 1 ],
         iconUrl: 'assets/marker-image.png',
         shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
      })});
      marker.addTo($event)
      .bindPopup('Información sobre el lugar')
      marker.bindTooltip("my tooltip text");
  }  

  // getNationalities() {
  //   this.nationalityService.get()
  //   .subscribe(nats => this.nationalities);
  // }

}
