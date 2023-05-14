import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent {
  cadastrarForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.cadastrarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      matricula: ['', Validators.required],
      cpf: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      endereco: ['', Validators.required],
    });
  }

  submit(): void {
    if (!this.cadastrarForm.valid) return;
    
    console.log(this.cadastrarForm.value);
  }
}
