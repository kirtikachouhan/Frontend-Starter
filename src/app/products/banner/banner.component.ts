import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../shared/services/products.services';
import {ProductData} from '../../shared/models/products.model';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [ProductsService]
})
export class BannerComponent implements OnInit {
  public responsiveOptions:any;
  constructor(private productsService: ProductsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  public recommendedProducts:ProductData[] = [];
  ngOnInit(): void {
    this.productsService.getRecommendedProducts().then((products: ProductData[]) => {
      this.recommendedProducts = products;
    });

  }

}
