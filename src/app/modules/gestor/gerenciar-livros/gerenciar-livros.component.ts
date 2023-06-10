import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/shared/models/livro';
import { LivroService } from 'src/app/shared/services/livro-service.service';

@Component({
  selector: 'app-gerenciar-livros',
  templateUrl: './gerenciar-livros.component.html',
  styleUrls: ['./gerenciar-livros.component.scss']
})
export class GerenciarLivrosComponent {
  livroForm: FormGroup;
  livro?: Livro;
  modoEdicao: boolean = false;

  get tituloPagina(): string {
    return this.modoEdicao ? "Editar Livro" : "Adicionar Livro";
  }

  get mensagemBotaoConfirmar(): string {
    return this.modoEdicao ? "Editar" : "Adicionar";
  }

  constructor(
    private livroService: LivroService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.livroForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      autor: ["", Validators.required],
      editora: ["", Validators.required],
      isbn: [""],
      data_publicacao: ["", Validators.required],
      genero: ["", Validators.required],
      sinopse: ["", Validators.required],
      numero_paginas: ["", Validators.required],
      quantidade_exemplares: ["", Validators.required],
      disponibilidade: ["", Validators.required],
      idioma: ["", Validators.required],
      url_img: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.livroService.pegarPorId(id).subscribe((livroRetornado) => {
          this.livro = livroRetornado;
          console.log(this.livro);
          this.livroForm.patchValue(this.livro);
          this.modoEdicao = true;
        });
      }
    });
  }

  apagar() {
    if (!this.livro) return;
    const id = this.livro.id!;

    this.livroService.apagar(id).subscribe((apagado) => {
      this.router.navigateByUrl("/livros");
    });
  }

  submit() {
    if (this.livroForm.invalid) return;

    const {
      titulo,
      autor,
      editora,
      data_publicacao,
      genero,
      sinopse,
      numero_paginas,
      disponibilidade,
      idioma,
      url_img,
      quantidade_exemplares,
      isbn,
    } = this.livroForm.value;

    const livro: Livro = new Livro(
      titulo,
      autor,
      editora,
      new Date(data_publicacao),
      genero,
      sinopse,
      numero_paginas,
      disponibilidade,
      idioma,
      url_img,
      quantidade_exemplares,
      isbn
    );

    this.modoEdicao ? this.atualizar(livro) : this.adicionar(livro);
  }

  adicionar(livro: Livro) {
    this.livroService.inserir(livro).subscribe((adicionado) => {
      this.livroForm.reset();
      this.router.navigateByUrl("/livros");
    });
  }

  atualizar(livro: Livro) {
    if (!this.livro) return;
    livro.id = this.livro.id;
    this.livroService.atualizar(livro).subscribe((editado) => {
      this.router.navigateByUrl("/livros");
    });
  }
}
