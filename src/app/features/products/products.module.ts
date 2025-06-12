import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductItemComponent } from './views/product-item/product-item.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule
  ]
})
export class ProductsModule { }
