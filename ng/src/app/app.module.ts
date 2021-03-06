import { NationalityService } from './services/nationality.service';
//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SliderModule} from 'primeng/primeng';


//Componentes
import { AppComponent } from './app.component';


//Librerías
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import {SelectButtonModule} from 'primeng/primeng';
import { AlertModule } from 'ngx-bootstrap/alert';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    FormsModule,
    SelectButtonModule,
    HttpClientModule,
    AlertModule.forRoot(),
    SliderModule
    
  ],
  providers: [
    NationalityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
