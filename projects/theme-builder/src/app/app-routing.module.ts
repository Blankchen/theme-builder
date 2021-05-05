import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'bootstrap',
        loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule)
      },
      {
        path: 'ld-promotion',
        loadChildren: () => import('./ld-promotion/ld-promotion.module').then(m => m.LdPromotionModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
