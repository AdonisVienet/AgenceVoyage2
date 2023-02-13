import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { DestinationComponent } from './component/destination/destination.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { AvisComponent } from './component/avis/avis.component';
import { VoyageurComponent } from './component/voyageur/voyageur.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    DestinationComponent,
    ReservationComponent,
    AvisComponent,
    VoyageurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
