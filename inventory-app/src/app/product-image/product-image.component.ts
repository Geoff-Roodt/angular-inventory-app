import { Component, Input, HostBinding } from '@angular/core';
import {Product} from '../product/product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  // Expect the product to be passed in as a parameter to our component
  // Dynamically add styling to our component
  @Input() product:Product;
  @HostBinding('attr.class') cssClass = 'ui small large';

  constructor() { }
}
