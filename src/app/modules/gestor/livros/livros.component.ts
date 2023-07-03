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
  livros: Array<Livro> = [];

  pesquisa: string = '';

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.livroService.pegarTodos().subscribe((livrosRetornados) => {
      this.livros = livrosRetornados;
    });
  }

  irEditar(id: string): void {
    this.router.navigate(['/gestor/livros', id]);
  }
}
