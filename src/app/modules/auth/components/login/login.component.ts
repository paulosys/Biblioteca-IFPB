import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  login?: Login;
  hidePassword = true;

  verSenha() {
    this.hidePassword = !this.hidePassword;
  }

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  submit() {
    if (this.loginForm.invalid) return;

    const { cpf, senha } = this.loginForm.value;

    const login: Login = new Login(cpf, senha);
  }
}
