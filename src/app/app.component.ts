import { Component } from '@angular/core';
import { routes } from 'projects/theme-builder/src/app/app-routing.module';

import { PwaService } from './services/pwa.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  menuList = [
    {
      title: 'Theme builder',
      link: '/theme-builder/',
      children: routes[0].children.map(x => {
        return {
          title: x.path,
          link: x.path,
        };
      }),
    }
  ];

  constructor(private pwaService: PwaService) {
    this.pwaService.checkForUpdates();
  }
}
