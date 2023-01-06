import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // menuItems: MenuItem[] = [];

  // mainMenu: {
  //   defaultOptions: Array<any>, accessLink: Array<any>
  // } = { defaultOptions: [], accessLink: [] };

  constructor() { }

  ngOnInit() {
    // this.menuItems = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-fw pi-home',
    //     routerLink: ['/']
    //   },
    //   {
    //     label: 'Parametros',
    //     icon: 'pi pi-fw pi-cog',
    //     expanded: false,
    //     items: [
    //       {
    //         label: 'Registro Categorias',
    //         icon: 'pi pi-fw pi-bookmark',
    //         routerLink: ['/']
    //       },
    //       {
    //         label: 'Registro productos',
    //         icon: 'pi pi-fw pi-bookmark',
    //         routerLink: ['/']
    //       }
    //     ]
    //   }
    // ];
  }
}
