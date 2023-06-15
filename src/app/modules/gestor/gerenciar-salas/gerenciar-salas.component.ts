import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemAbstract } from 'src/app/shared/models/mensagem.abstract';
import { Sala } from 'src/app/shared/models/sala';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';
import { SalaService } from 'src/app/shared/services/sala.service';
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
    private salaService: SalaService,
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
      dialBackgroundColor: '#008000' // verde
    },
    clockFace: {
      clockFaceBackgroundColor: '#f2f2f2', // cinza claro
      clockHandColor: '#008000', // verde
      clockFaceTimeInactiveColor: '#999999' // cinza mais escuro
    }
  };
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.salaService.pegarPorId(id).subscribe((salaRetornada) => {
          this.sala = salaRetornada;
          console.log(this.sala);
          this.salaForm.patchValue(this.sala);
          this.modoEdicao = true;
        });
      }
  }
  );}

  submit() {
    if(this.salaForm.invalid) return;

    const{
      data_agendada,
      horario_inicial,
      horario_final,
      tipo_sala,
    } = this.salaForm.value;

    const sala: Sala = new Sala(
      new Date(data_agendada),
      horario_inicial,
      horario_final,
      tipo_sala,
    );

    this.modoEdicao ? this.atualizar(sala) : this.adicionar(sala);

  }

  adicionar(sala: Sala) {
    this.salaService.inserir(sala).subscribe((inserida) => {
      this.salaForm.reset();
      this.router.navigateByUrl('/salas/salas-card/horario');
    });
  }
  atualizar(sala: Sala) {
    if(!this.sala) return;
    sala.id = this.sala.id;

    
      this.salaService.atualizar(sala).subscribe((editada) => {
        this.router.navigateByUrl('/salas/salas-card/horario');
      });
    };
  }
  








  
