import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [{

    titulo: 'principal',
    icon: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'ProgressBar', url: '/progress' },
      { titulo: 'Graficas', url: '/graficas1' },
      { titulo: 'Promesas', url: '/promesas' },
      { titulo: 'RxJs', url: '/rxjs' },
    ]

  }];

  constructor() { }

}
