import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LivrosComponent } from './livros/livros.component';
import { GerenciarLivrosComponent } from './gerenciar-livros/gerenciar-livros.component';
import { SalasComponent } from './salas/salas.component';
import { GerenciarSalasComponent } from './gerenciar-salas/gerenciar-salas.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SalaCardComponent } from './components/sala-card/sala-card.component';


@NgModule({
  declarations: [HomeAdminComponent, LivrosComponent, GerenciarLivrosComponent, SalasComponent, GerenciarSalasComponent, SalaCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
})
export class GestorModule {}
