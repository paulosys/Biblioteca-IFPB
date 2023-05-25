import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { CadastrarComponent } from "./components/cadastrar/cadastrar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxMaskModule } from "ngx-mask";
import { LogoComponent } from "./components/logo/logo.component";
import { GerenciarSalaComponent } from "./modules/admin/components/salas/gerenciar-sala.component";
import { LivrosComponent } from "./modules/admin/components/livros/livros.component";
import { HomeAdminComponent } from "./modules/admin/components/home-admin/home-admin.component";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GerenciarLivroComponent } from "./modules/admin/components/gerenciar-livro/gerenciar-livro.component";

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    LogoComponent,
    GerenciarSalaComponent,
    LivrosComponent,
    HomeAdminComponent,
    GerenciarLivroComponent,
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
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
