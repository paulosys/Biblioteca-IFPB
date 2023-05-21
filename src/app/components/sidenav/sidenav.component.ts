import { Component } from '@angular/core';
import { navbarData } from './navData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  collapsed = false;
  navData = navbarData;
  
}
