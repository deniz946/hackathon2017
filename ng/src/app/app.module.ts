import { NationalityService } from './services/nationality.service';
//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';


//Librerías
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import {SelectButtonModule} from 'primeng/primeng';
import { AlertModule } from 'ngx-bootstrap';



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
  ],
  providers: [
    NationalityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
