import { Component } from '@angular/core';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public searchVal = "";
  public getSearchData = (searchVal: string) => {
    this.searchVal = searchVal;
  }
}
