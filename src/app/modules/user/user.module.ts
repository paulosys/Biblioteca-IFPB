import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
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
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SalaCardComponent } from './components/sala-card/sala-card.component';
import { HorarioComponent } from './horario/horario.component';
import { MatTableModule } from '@angular/material/table';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LogoComponent } from './components/logo/logo.component';
import { UserRoutingModule } from './user-routing.module';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    LivrosComponent,
    GerenciarLivrosComponent,
    SalasComponent,
    GerenciarSalasComponent,
    SalaCardComponent,
    HorarioComponent,
    UserMenuComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  exports: [UserMenuComponent],
})
export class UserModule {}
