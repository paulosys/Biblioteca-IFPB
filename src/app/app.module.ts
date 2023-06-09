import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './shared/components/logo/logo.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { GestorModule } from './modules/gestor/gestor.module';
import { MensagemAbstract } from './shared/models/mensagem.abstract';
import { MensagemSweetService } from './shared/services/mensagem-sweet.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { AngularFireModule } from '@angular/fire/compat';

import { FirebaseConfig } from 'firebase.config';

@NgModule({
  declarations: [AppComponent, LogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    GestorModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    MatDialogModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [
    {
      provide: MensagemAbstract,
      useClass: MensagemSweetService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
