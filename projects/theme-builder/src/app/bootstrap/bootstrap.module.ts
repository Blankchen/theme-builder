import { NgModule } from '@angular/core';
import { BootstrapComponent } from './bootstrap.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VariableComponent } from './variable/variable.component';

const routes: Routes = [
  {
    path: '',
    component: BootstrapComponent,
  },
];

@NgModule({
  declarations: [
    BootstrapComponent,
    VariableComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class BootstrapModule { }
