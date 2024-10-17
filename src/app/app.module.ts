import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './main-component/header/header.component';
import { provideHttpClient } from '@angular/common/http';
import { CartComponent } from './others/cart/cart.component';
import { FavoriteComponent } from './other/favorite/favorite.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, CartComponent, FavoriteComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
