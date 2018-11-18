import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Principal',
    icon: 'nb-grid-a',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title:'Cadastros',
    icon:'nb-grid-b-outline',
    children: [
      {
        title:'Usuários',
        link:'/pages/users/list'
      },
      {
        title:'Permissões',
        link:'/pages/rules/list'
      }
    ]
  },
  {
    title:'Relatórios',
    icon:'nb-compose',
    children: [
      {
        title:'Usuários On-line',
        link:'pages/reports/users/online',
      }
    ]
  }
];
