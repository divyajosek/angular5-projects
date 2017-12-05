import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CartModule } from './cart/cart.module';
import { CatalogModule} from './catalog/catalog.module';
import { CheckoutModule} from './checkout/checkout.module';
import {UserModule} from './user/user.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    CatalogModule,
    CheckoutModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
