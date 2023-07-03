import { Component } from '@angular/core';

@Component({
  selector: 'app-gestor-menu',
  templateUrl: './gestor-menu.component.html',
  styleUrls: ['./gestor-menu.component.scss']
})
export class GestorMenuComponent {
  navData = [
    {
      routeLink: "gestor/home",
      icon: "home",
      label: "Início",
    },
    {
      routeLink: "gestor/livros",
      icon: "menu_book",
      label: "Livros",
    },
    {
      routeLink: "gestor/salas",
      icon: "room_preferences",
      label: "Salas",
    },
    {
      routeLink: "cadastrar-usuario",
      icon: "logout",
      label: "Sair",
    },
  ];
}
