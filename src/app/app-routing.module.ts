import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './modules/gestor/home-admin/home-admin.component';
import { LivrosComponent } from './modules/gestor/livros/livros.component';
import { GerenciarLivrosComponent } from './modules/gestor/gerenciar-livros/gerenciar-livros.component';

const routes: Routes = [
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'livros/adicionar', component: GerenciarLivrosComponent },
  { path: 'livros/:id', component: GerenciarLivrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
