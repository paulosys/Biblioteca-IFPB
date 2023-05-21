import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { GerenciarSalaComponent } from './modules/admin/components/gerenciar-sala/gerenciar-sala.component';
import { GerenciarLivroComponent } from './modules/admin/components/gerenciar-livro/gerenciar-livro.component';
import { HomeAdminComponent } from './modules/admin/components/home-admin/home-admin.component';

const routes: Routes = [
  {path: '', redirectTo:'home-admin', pathMatch: 'full'},
  {path: 'cadastrar-usuario', component: CadastrarComponent},
  {path: 'home-admin', component: HomeAdminComponent},
  {path: 'gerenciar-livro', component: GerenciarLivroComponent},
  {path: 'gerenciar-sala', component: GerenciarSalaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
