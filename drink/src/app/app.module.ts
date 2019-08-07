import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { DetailComponent } from './boissons/detail/detail.component';
import { PointVenteComponent } from './point-vente/point-vente.component';
import { HeaderComponent } from './header/header.component';
import { BoissonsService } from 'src/app/services/boissons.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BoissonsComponent,
    DetailComponent,
    PointVenteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    BoissonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
