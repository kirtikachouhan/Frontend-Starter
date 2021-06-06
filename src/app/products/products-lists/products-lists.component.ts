import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../shared/services/products.services';
import { ProductData } from '../../shared/models/products.model';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss'],
  providers: [ProductsService]
})
export class ProductsListsComponent implements OnInit {

  @Input() searchData: string = "";
  constructor(private productsService: ProductsService) {
  }
  public productsList: ProductData[] = [];
  public showLoader = false;
  public showEmptyProductMessage = false;
  public startPage = 0;
  public endPage = 12;
  // Api should give totalRecords length;
  public totalRecords = 1000;

  ngOnInit(): void {
    this.showLoader = true;
    this.loadData(this.startPage, this.endPage, this.searchData);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["searchData"]["currentValue"] !== changes["searchData"]["previousValue"]) {
      this.loadData(this.startPage, this.endPage, changes["searchData"]["currentValue"]);
    }
  }

  public paginateData = (pageData: any) => {
    this.loadData(pageData["first"], pageData["first"] + pageData["rows"], this.searchData);
  }

  public loadData = (startPage: Number, endPage: Number, searchData: string) => {
    this.productsService.getProductsList(startPage, endPage, searchData).then((products: ProductData[]) => {
      this.productsList = products;
      if (!this.productsList.length) {
        this.showEmptyProductMessage = true;
      }
      this.showLoader = false;
    });
  }
}
