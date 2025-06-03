import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppComponent,               
    NavigationBarComponent     
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
