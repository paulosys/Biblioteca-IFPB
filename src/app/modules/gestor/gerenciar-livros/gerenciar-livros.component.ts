import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/shared/models/livro';
import { MensagemAbstract } from 'src/app/shared/models/mensagem.abstract';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-gerenciar-livros',
  templateUrl: './gerenciar-livros.component.html',
  styleUrls: ['./gerenciar-livros.component.scss'],
})
export class GerenciarLivrosComponent {
  livroForm: FormGroup;
  livro?: Livro;
  modoEdicao: boolean = false;

  get tituloPagina(): string {
    return this.modoEdicao ? 'Editar Livro' : 'Adicionar Livro';
  }

  get mensagemBotaoConfirmar(): string {
    return this.modoEdicao ? 'Editar' : 'Adicionar';
  }

  constructor(
    private livroService: LivroService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemService: MensagemAbstract
  ) {
    this.livroForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      isbn: [''],
      data_publicacao: ['', Validators.required],
      genero: ['', Validators.required],
      sinopse: ['', Validators.required],
      qntd_paginas: ['', Validators.required],
      qntd_exemplares: ['', Validators.required],
      disponibilidade: ['', Validators.required],
      idioma: ['', Validators.required],
      url_img: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.livroService.pegarPorId(id).subscribe((livroRetornado) => {
          this.livro = livroRetornado;
          this.livroForm.patchValue(this.livro);

          this.livroForm.controls['disponibilidade'].setValue(
            this.livro.disponibilidade == true ? 'Disponível' : 'Indisponível'
          );

          this.livroForm.controls['data_publicacao'].setValue(
            new Date(livroRetornado.data_publicacao).toISOString()
          );

          this.modoEdicao = true;
        });
      }
    });
  }

  submit() {
    if (this.livroForm.invalid) return;

    const livro: Livro = new Livro(
      this.livroForm.value.titulo,
      this.livroForm.value.autor,
      this.livroForm.value.editora,
      new Date(this.livroForm.value.data_publicacao),
      this.livroForm.value.genero,
      this.livroForm.value.sinopse,
      this.livroForm.value.qntd_paginas,
      this.livroForm.value.disponibilidade == 'Disponível' ? true : false,
      this.livroForm.value.idioma,
      this.livroForm.value.url_img,
      this.livroForm.value.qntd_exemplares,
      this.livroForm.value.isbn
    );

    this.modoEdicao ? this.atualizar(livro) : this.adicionar(livro);
  }

  adicionar(livro: Livro) {
    this.livroService.inserir(livro).subscribe((adicionado) => {
      this.mensagemService.sucesso('Livro adicionado com sucesso!', () => {
        this.livroForm.reset();
        this.router.navigateByUrl('/gestor/livros');
      });
    });
  }

  atualizar(livro: Livro) {
    if (!this.livro) return;
    livro.id = this.livro.id;

    this.mensagemService.alerta('Livro editado com sucesso!', () => {
      this.livroService.atualizar(livro).subscribe((editado) => {
        this.router.navigateByUrl('/gestor/livros');
      });
    });
  }

  apagar() {
    if (!this.livro) return;
    const id = this.livro.id!;

    this.mensagemService.deletar('Livro apagado com sucesso!', () => {
      this.livroService.apagar(id).subscribe((apagado) => {
        this.router.navigateByUrl('/gestor/livros');
      });
    });
  }
}
