import { Injectable } from '@angular/core';

import { PointVente } from 'src/app/modeles/point-vente-modele';
import { listePointsVente } from 'src/app/liste/liste-points-vente';

@Injectable({
  providedIn: 'root'
})
export class PointVenteService {

  listePointVente: PointVente[] = [];

  constructor() {
    this.listePointVente = listePointsVente;
  }


}
