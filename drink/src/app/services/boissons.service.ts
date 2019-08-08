import { Injectable } from '@angular/core';

import { listeBoissons } from 'src/app/liste/liste-boissons';
import { Boisson } from 'src/app/modeles/boisson-modele';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {

  listeBoissons: Boisson[] = [];

  constructor() {
    this.listeBoissons = listeBoissons;
  }

  delete(id) {
    const boissonASupprimer = this.listeBoissons.findIndex(
      (aSupprimer) => {
        if (aSupprimer === listeBoissons[id]) {
          return true;
        }
      }
    );
    this.listeBoissons.splice(boissonASupprimer, 1);
  }

}
