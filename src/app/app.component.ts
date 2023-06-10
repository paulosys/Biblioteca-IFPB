import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblioteca';
  navData = [
    {
      routeLink: "home-admin",
      icon: "home",
      label: "Início",
    },
    {
      routeLink: "livros",
      icon: "menu_book",
      label: "Livros",
    },
    {
      routeLink: "salas",
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
