import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductData } from '../models/products.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor(private http: HttpClient) { }
  getRecommendedProducts() {
    return this.http.get<ProductData[]>(environment.apiBase + "recommendeds").toPromise();
  }

  getProductsList(start: Number, end: Number, searchData: string) {
    return this.http.get<ProductData[]>(environment.apiBase + "products?_start=" + start + "&_end=" + end + "&q=" + searchData).toPromise();
  }
}
