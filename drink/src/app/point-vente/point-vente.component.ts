import { Component, OnInit } from '@angular/core';

// librairie pour cartes interactives
import * as L from 'leaflet';

import { PointVenteService } from 'src/app/services/point-vente.service';
import { PointVente } from 'src/app/modeles/point-vente-modele';

@Component({
  selector: 'app-point-vente',
  templateUrl: './point-vente.component.html',
  styleUrls: ['./point-vente.component.css']
})
export class PointVenteComponent implements OnInit {

  listePointVente: PointVente[] = [];

  constructor(
    private pointVenteService: PointVenteService,
  ) { this.listePointVente = this.pointVenteService.listePointVente; }

  ngOnInit() {
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const pointVenteVannes = L.map('barVannes').setView([47.655976, -2.760212], 16);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Platon Restau'
  }).addTo(pointVenteVannes);

  const myIcon = L.icon({iconUrl: 'assets/images/marker-icon-laposte.png'});
  const myIconDefault = L.icon({iconUrl: 'assets/images/marker-icon-blue.png'});

  L.marker([47.658443, -2.760997], {icon: myIcon}).bindPopup('Mairie de Vannes').addTo(pointVenteVannes).openPopup();
  this.bouclerPointVente(myIconDefault, pointVenteVannes);
}

  bouclerPointVente(myIcon, pointVenteVannes) {
    for (let i = 0; i < this.listePointVente.length; i++) {
      L.marker([this.listePointVente[i].latitude, this.listePointVente[i].longitude], {icon: myIcon})
        .bindPopup(this.listePointVente[i].nom).addTo(pointVenteVannes);
    }
  }

}
