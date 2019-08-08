import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Boisson } from 'src/app/modeles/boisson-modele';
import { BoissonsService } from 'src/app/services/boissons.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: string;
  listeBoissons: Boisson[] = [];

  constructor(
    private route: ActivatedRoute,
    private boissonsService: BoissonsService,
  ) {
    this.id = this.route.snapshot.paramMap.get('boissonId');
    this.listeBoissons = this.boissonsService.listeBoissons;
  }

  ngOnInit() {
  }

}
