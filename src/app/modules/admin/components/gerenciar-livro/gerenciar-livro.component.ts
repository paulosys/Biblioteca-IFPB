import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/shared/models/livro';
import { LivroService } from 'src/app/shared/services/livro-service.service';

@Component({
  selector: 'app-gerenciar-livro',
  templateUrl: './gerenciar-livro.component.html',
  styleUrls: ['./gerenciar-livro.component.scss']
})
export class GerenciarLivroComponent implements OnInit {
  livros: Array<Livro> = [];

  pesquisa: string = '';

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.pegarTodos().subscribe(
      livrosRetornados => {
        this.livros = livrosRetornados;
        console.log(this.livros);
      }
    );
  }

}
