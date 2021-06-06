import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';

import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products.component';

import { SearchProductsComponent } from './search-products/search-products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';

import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    BannerComponent,
    ProductsComponent,
    SearchProductsComponent,
    ProductsListsComponent,
    ProductsListItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductsRoutingModule,
    CarouselModule,
    InputTextModule,
    CardModule,
    ProgressSpinnerModule,
    ButtonModule,
    PaginatorModule
  ],
  exports:[
    BannerComponent,
    ProductsComponent
  ]
})
export class ProductsModule {}
