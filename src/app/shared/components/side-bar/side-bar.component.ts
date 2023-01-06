import { ElementRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '@shared/services/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  
  menuItems: MenuItem[] = [];
  
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>  
  } = { defaultOptions:[], accessLink:[] };

  constructor(public layoutService: LayoutService, public el: ElementRef) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'Parametros',
        icon: 'pi pi-fw pi-cog',        
        items: [
          {
            label: 'Registro Categorias',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/', 'categories']
          },
          {
            label: 'Registro productos',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/']
          }
        ]
      }
    ];
  }
}