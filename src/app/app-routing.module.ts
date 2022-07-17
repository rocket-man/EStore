import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((module) => module.CartModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
  {
    path: '',
    component: JumbotronComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
