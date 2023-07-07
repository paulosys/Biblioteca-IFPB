import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciarLivrosComponent } from './gerenciar-livros/gerenciar-livros.component';
import { GerenciarSalasComponent } from './gerenciar-salas/gerenciar-salas.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { LivrosComponent } from './livros/livros.component';
import { SalasComponent } from './salas/salas.component';

const userRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'livros/adicionar', component: GerenciarLivrosComponent },
  { path: 'livros/:id', component: GerenciarLivrosComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'salas/horarios/:id', component: HorarioComponent },
  { path: 'salas/horarios/adicionar/:id', component: GerenciarSalasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
