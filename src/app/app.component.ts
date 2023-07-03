import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'biblioteca';
  showGestorMenu: boolean;

  constructor(private router: Router) {
    this.showGestorMenu = false;

    const gestorRoutes = ['/gestor/home', '/gestor/salas', '/gestor/livros'];

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;

        this.showGestorMenu = gestorRoutes.some((route) =>
          currentRoute.startsWith(route)
        );
      }
    });
  }
}
