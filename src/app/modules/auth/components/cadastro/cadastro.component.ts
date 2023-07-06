import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from 'src/app/shared/models/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  cadastro?: Cadastro;
  hidePassword = true;

  verSenha() {
    this.hidePassword = !this.hidePassword;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      matricula: [''],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmar_senha: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.minLength(14)]],
    });
  }

  submit() {
    if (this.cadastroForm.invalid) return;

    const {
      nome,
      sobrenome,
      matricula,
      cpf,
      senha,
      telefone,
      confirmar_senha,
      email,
      endereco,
    } = this.cadastroForm.value;

    if (senha !== confirmar_senha) {
      this.cadastroForm.controls['confirmar_senha'].setErrors({
        incorrect: true,
      });
      return;
    }

    const cpfLimpo = cpf.replace(/\D/g, '');
    const telefoneLimpo = telefone.value.replace(/\D/g, '');

    const cadastro: Cadastro = new Cadastro(
      nome,
      sobrenome,
      matricula,
      cpfLimpo,
      senha,
      confirmar_senha,
      email,
      telefoneLimpo,
      endereco
    );
  }
}
