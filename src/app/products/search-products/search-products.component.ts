import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductData } from '../../shared/models/products.model';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {

  constructor() {}

  @Output() searchProducts = new EventEmitter<string>();
  public searchData: string = "";
  ngOnInit(): void { }

  public debounce = (fn: Function, delay: number) => {
    let timer: any, self = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(self, arguments);
      }, delay);
    }
  }
  public keyUp = () => {
    this.searchProducts.emit(this.searchData);
  }

  public searchOnKeyUp = this.debounce(this.keyUp, 300);

}
