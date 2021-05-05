import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class ThemeBuilderModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: [
        SharedModule.forRoot().providers
      ],
    };
  }
}
