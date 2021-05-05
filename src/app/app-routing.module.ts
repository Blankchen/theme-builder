import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeBuilderModule } from 'projects/theme-builder/src/app/app.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/theme-builder' },
  { path: 'theme-builder', loadChildren: () => import('projects/theme-builder/src/app/app.module').then(m => m.ThemeBuilderModule) },
  { path: '**', redirectTo: '/theme-builder', },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    ThemeBuilderModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
