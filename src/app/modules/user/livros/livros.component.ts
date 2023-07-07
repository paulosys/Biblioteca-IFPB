import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/shared/models/livro';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  _livros: Array<Livro> = [];

  pesquisa: string = '';

  constructor(private livroService: LivroService, private router: Router) {}

  get livros(): Array<Livro> {
    return this._livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.livroService.pegarTodos().subscribe((livrosRetornados) => {
      this._livros = livrosRetornados;
    });
  }

  irEditar(id: number): void {
    this.router.navigate(['/user/livros', id]);
  }
}
