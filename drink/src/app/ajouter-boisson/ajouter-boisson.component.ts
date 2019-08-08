import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Boisson } from 'src/app/modeles/boisson-modele';
import { BoissonsService } from 'src/app/services/boissons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-boisson',
  templateUrl: './ajouter-boisson.component.html',
  styleUrls: ['./ajouter-boisson.component.css']
})
export class AjouterBoissonComponent implements OnInit {

  ajouterBoissonForm: FormGroup;

  alcoolisee = false;

  input;

  constructor(
    private boissonsService: BoissonsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ajouterBoissonForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      couleur: new FormControl('', [Validators.required]),
      alcoolisee: new FormControl(''),
      titre: new FormControl(''),
    });
    this.ajouterBoissonForm.get('titre').disable();
    this.input = this.ajouterBoissonForm.get('titre');
  }

  sansAlcool() {
    this.alcoolisee = false;
    this.input.disable();
  }

  avecAlcool() {
    this.alcoolisee = true;
    this.input.enable();
  }

  radioChange(value) {
    this.alcoolisee = value;
  }

  ajouterBoisson() {
    const boissonId = this.boissonsService.listeBoissons.length;
    const nom = this.ajouterBoissonForm.get('nom').value;
    const couleur = this.ajouterBoissonForm.get('couleur').value;
    const alcoolisee = this.alcoolisee;
    const titre = this.ajouterBoissonForm.get('titre').value;

    const boissonAAjouter = new Boisson(boissonId, nom, couleur, alcoolisee, titre);
    this.boissonsService.listeBoissons.push(boissonAAjouter);
    this.router.navigate(['boissons']);
  }

}
