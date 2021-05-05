import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { ColorPickerModule } from 'ngx-color-picker';

import { CodeBoxComponent } from './code-box/code-box.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ThemeHeaderComponent } from './theme-header/theme-header.component';

const baseComponents = [
  CommonModule,
  FormsModule,
  // ng-zorro
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzDrawerModule,
  NzButtonModule,
  NzInputModule,
  NzModalModule,
  NzTabsModule,
  // https://zefoy.github.io/ngx-color-picker/
  ColorPickerModule,
];

const components = [
  CodeBoxComponent,
  HighlightComponent,
  ThemeHeaderComponent,
];

const providers = [
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...baseComponents,
  ],
  exports: [
    ...baseComponents,
    ...components,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...providers]
    };
  }
}
