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
      cpf: ['', Validators.required],
      senha: ['', Validators.required, Validators.minLength(6)],
      confirmar_senha: ['', Validators.required, Validators.minLength(6)],
    });
  }

  submit() {
    if (this.cadastroForm.invalid) return;

    const { nome, sobrenome, matricula, cpf, senha, confirmar_senha } =
      this.cadastroForm.value;

    const cadastro: Cadastro = new Cadastro(
      nome,
      sobrenome,
      matricula,
      cpf,
      senha,
      confirmar_senha
    );
  }
}
