import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemAbstract } from 'src/app/shared/models/mensagem.abstract';
import { Sala } from 'src/app/shared/models/sala';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';

@Component({
  selector: 'app-gerenciar-salas',
  templateUrl: './gerenciar-salas.component.html',
  styleUrls: ['./gerenciar-salas.component.scss']
})
export class GerenciarSalasComponent {
  salaForm: FormGroup;
  sala?: Sala;
  modoEdicao: boolean = false;
 
  get tituloPagina(): string {
    return this.modoEdicao ? 'Editar Agendamento' : 'Adicionar Horário';
  }

  get mensagemBotaoConfirmar(): string {
    return this.modoEdicao ? 'Editar' : 'Adicionar';
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemService: MensagemAbstract
  ) {
    this.salaForm = this.formBuilder.group({
      data_agendada: ['', Validators.required],
      horario_inicial: ['', Validators.required],
      horario_final: ['', Validators.required],
      sala: ['', Validators.required],
      
    });
  }
  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#ffffff', // branco
      buttonColor: '#008000' // verde
      
    },
    dial: {
      dialBackgroundColor: '#008000' // cinza escuro
    },
    clockFace: {
      clockFaceBackgroundColor: '#f2f2f2', // cinza claro
      clockHandColor: '#008000', // verde
      clockFaceTimeInactiveColor: '#999999' // cinza mais escuro
    }
  };
  
  
  
  
 


}
