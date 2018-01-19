import { Component, Input } from '@angular/core';
import {Product} from '../product/product.model';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html'
})
export class ProductDisplayComponent {
  @Input() product:Product;

  constructor() { }
}
