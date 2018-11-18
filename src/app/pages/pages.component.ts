import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
    </ngx-sample-layout>
  `,
  styles: []
})
export class PagesComponent {

  menu = MENU_ITEMS;

}
