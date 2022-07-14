import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ActionsComponent } from './product/actions/actions.component';



@NgModule({
  declarations: [
    ProductComponent,
    PaginationComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
