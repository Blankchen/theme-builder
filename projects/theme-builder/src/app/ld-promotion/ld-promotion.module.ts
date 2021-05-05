import { NgModule } from '@angular/core';
import { LdPromotionComponent } from './ld-promotion.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LdPromotionComponent,
  },
];

@NgModule({
  declarations: [
    LdPromotionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class LdPromotionModule { }
