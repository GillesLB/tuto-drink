import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { BoissonsComponent } from 'src/app/boissons/boissons.component';
import { DetailComponent } from 'src/app/boissons/detail/detail.component';
import { PointVenteComponent } from 'src/app/point-vente/point-vente.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'boissons', component: BoissonsComponent},
  {path: 'boissons/:boissonId', component: DetailComponent},
  {path: 'point-vente', component: PointVenteComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
