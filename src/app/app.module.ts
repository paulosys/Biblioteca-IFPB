import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 

import { NgxMaskModule } from 'ngx-mask';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LogoComponent } from './components/logo/logo.component';
import { GerenciarSalaComponent } from './modules/admin/components/gerenciar-sala/gerenciar-sala.component';
import { BodyComponent } from './components/body/body.component';
import { GerenciarLivroComponent } from './modules/admin/components/gerenciar-livro/gerenciar-livro.component';
import { HomeAdminComponent } from './modules/admin/components/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    SidenavComponent,
    LogoComponent,
    GerenciarSalaComponent,
    BodyComponent,
    GerenciarLivroComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
