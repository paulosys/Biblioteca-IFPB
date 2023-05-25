import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { GerenciarSalaComponent } from './modules/admin/components/salas/gerenciar-sala.component';
import { LivrosComponent } from './modules/admin/components/livros/livros.component';
import { HomeAdminComponent } from './modules/admin/components/home-admin/home-admin.component';
import { GerenciarLivroComponent } from './modules/admin/components/gerenciar-livro/gerenciar-livro.component';

const routes: Routes = [
  {path: '', redirectTo:'home-admin', pathMatch: 'full'},
  {path: 'cadastrar-usuario', component: CadastrarComponent},
  {path: 'home-admin', component: HomeAdminComponent},
  {path: 'livros', component: LivrosComponent},
  {path: 'livros/adicionar', component: GerenciarLivroComponent},
  {path: 'livros/:id', component: GerenciarLivroComponent},
  {path: 'salas', component: GerenciarSalaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
