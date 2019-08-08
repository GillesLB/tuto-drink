import { Component, OnInit } from '@angular/core';

import { Boisson } from 'src/app/modeles/boisson-modele';
import { BoissonsService } from 'src/app/services/boissons.service';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {

  listeBoissons: Boisson[] = [];

  constructor(
    private boissonsService: BoissonsService,
  ) {
    this.listeBoissons = this.boissonsService.listeBoissons;
  }

  ngOnInit() {
  }

  onDelete(boissonId) {
    this.boissonsService.delete(boissonId);
  }

}
