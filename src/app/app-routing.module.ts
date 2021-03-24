import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLigaComponent } from './componentes/detalle-liga/detalle-liga.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';

import { GoleadoresComponent } from './componentes/goleadores/goleadores.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'goleadores', component: GoleadoresComponent},
  {path: 'ligas', component: LigasComponent},
  {path: 'equipos', component: EquiposComponent},
  {path: 'liga/:id', component: DetalleLigaComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
