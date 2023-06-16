import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './modules/gestor/home-admin/home-admin.component';
import { LivrosComponent } from './modules/gestor/livros/livros.component';
import { GerenciarLivrosComponent } from './modules/gestor/gerenciar-livros/gerenciar-livros.component';
import { SalasComponent } from './modules/gestor/salas/salas.component';
import { HorarioComponent } from './modules/gestor/horario/horario.component';
import { GerenciarSalasComponent } from './modules/gestor/gerenciar-salas/gerenciar-salas.component';

const routes: Routes = [
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'livros/adicionar', component: GerenciarLivrosComponent },
  { path: 'livros/:id', component: GerenciarLivrosComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'salas/horarios/:id', component: HorarioComponent },
  { path: 'salas/horarios/:id/adicionar', component: GerenciarSalasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
