import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
