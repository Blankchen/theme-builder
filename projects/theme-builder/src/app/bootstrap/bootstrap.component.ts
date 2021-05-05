import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';
import { Renderer2 } from '@angular/core';

import install from './configs/install';
import dark from './configs/dark';
import light from './configs/light';


declare var $: any;
@Component({
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BootstrapComponent implements OnInit, AfterViewInit, OnDestroy {
  install = install();
  theme = {
    dark: dark(),
    light: light()
  };
  // invalid-feedback, tooltip
  constructor(
    private renderer: Renderer2
  ) {
    this.toggleTheme('dark-theme');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ngOnDestroy() {
  }

  toggleTheme(theme: string) {
    const removeClass = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.renderer.addClass(document.body, theme);
    this.renderer.removeClass(document.body, removeClass);
  }

}
