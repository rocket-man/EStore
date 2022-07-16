import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ActionsComponent } from './product/actions/actions.component';
import { ProductsService } from './products.service';
import { ProductsPageComponent } from './products-page.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    PaginationComponent,
    ActionsComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService],
  exports: [ProductComponent, PaginationComponent, ActionsComponent]
})
export class ProductsModule { }
