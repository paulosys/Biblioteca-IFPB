import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = [
    {
      nome: 'QTD. Livros Cadastrados',
      descricao: '100',
      imagem: "../../../../assets/livros.jpg"
    },
    {
      nome: 'Salas Individuais Disponíveis',
      descricao: '10',
      imagem: "../../../../assets/man (1).png"
    },
    {
      nome: 'Salas em Grupo Disponíveis',
      descricao: '5',
      imagem: "../../../../assets/teamwork.png"
    }
  ];
}
