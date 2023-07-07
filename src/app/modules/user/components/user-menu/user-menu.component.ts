import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  navData = [
    {
      routeLink: "user/home",
      icon: "home",
      label: "Início",
    },
    {
      routeLink: "user/livros",
      icon: "menu_book",
      label: "Livros",
    },
    {
      routeLink: "user/salas",
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
