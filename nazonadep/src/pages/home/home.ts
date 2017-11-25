import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Atributos
  viewMode: number = 0;
  
  constructor(public navCtrl: NavController) {
  }

  /*
  * Cambia el modo de vista de los resultados
  */
  toggleView(){
    this.viewMode = (this.viewMode) ? 0 : 1;
  }

  /*
  * Vista mapa
  */
  initMap(){

  }
  isMapActive(){
    return (this.viewMode == 0);
  }

  /*
  * Vista lista
  */
  isListActive(){
    return (this.viewMode == 1)
  }

  

}
