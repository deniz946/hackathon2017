//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';

//Librerías
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
