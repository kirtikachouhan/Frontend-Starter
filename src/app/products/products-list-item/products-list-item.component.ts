import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from '../../shared/models/products.model';

@Component({
  selector: '[app-products-list-item]',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {

  constructor() { }
  @Input() product: any;
  ngOnInit(): void {}

}
