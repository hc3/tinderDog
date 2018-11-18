import { Component, OnDestroy } from '@angular/core';
import { NbMenuItem, NbMenuService, NbThemeService, NbMediaBreakpointsService, NbSidebarService, NbMediaBreakpoint } from '@nebular/theme';
import { takeWhile, withLatestFrom, delay } from 'rxjs/operators';

@Component({
  selector: 'ngx-sample-layout',
  template: `
  
  <nb-layout [center]="layout.id === 'center-column'" windowMode>
  <nb-layout-header fixed>
    <ngx-header [position]="sidebar.id === 'start' ? 'normal': 'inverse'"></ngx-header>
  </nb-layout-header>

  <nb-sidebar class="menu-sidebar"
               tag="menu-sidebar"
               responsive
               [end]="sidebar.id === 'end'">
    <nb-sidebar-header *ngIf="currentTheme !== 'corporate'">
      <a href="#" class="btn btn-hero-success main-btn">
        <i class="ion ion-social-github"></i> <span>Support Us</span>
      </a>
    </nb-sidebar-header>
    <ng-content select="nb-menu"></ng-content>
  </nb-sidebar>

  <nb-layout-column class="main-content">
    <ng-content select="router-outlet"></ng-content>
  </nb-layout-column>

  <nb-layout-column start class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
    <nb-menu [items]="subMenu"></nb-menu>
  </nb-layout-column>

  <nb-layout-column class="small" *ngIf="layout.id === 'three-column'">
    <nb-menu [items]="subMenu"></nb-menu>
  </nb-layout-column>

  <nb-layout-footer fixed>
    <ngx-footer></ngx-footer>
  </nb-layout-footer>

  <nb-sidebar class="settings-sidebar"
               tag="settings-sidebar"
               state="collapsed"
               fixed
               [end]="sidebar.id !== 'end'">

  </nb-sidebar>
</nb-layout>
  
  `,
  styleUrls: ['./sample-layout.scss']
})
export class SampleLayoutComponent implements OnDestroy {

  subMenu: NbMenuItem[] = [
    {
      title: 'PAGE LEVEL MENU',
      group: true
    },
    {
      title:'Testando',
      icon:'ion ion-android-radio-button-off',
      link:'/pages/home'
    }
  ];

  layout:any = {
    name: 'One Column',
    icon: 'nb-layout-default',
    id: 'one-column',
    selected: true,
  };

  sidebar:any = {
    name: 'Sidebar at layout start',
    icon: 'nb-layout-sidebar-left',
    id: 'start',
    selected: true,
  };

  currentTheme: string = "cosmic";

  private alive = true;

  constructor(
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService
  ) {

    const isBp = this.bpService.getByName('is');

    this.menuService.onItemSelect()
    .pipe(
      takeWhile(() => this.alive),
      withLatestFrom(this.themeService.onMediaQueryChange()),
      delay(20),
    )
    .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

      if (bpTo.width <= isBp.width) {
        this.sidebarService.collapse('menu-sidebar');
      }
    });

   }

  ngOnDestroy() {
    this.alive = false;
  }

}
