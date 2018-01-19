import { Component, Input, HostBinding } from '@angular/core';
import {Product} from '../product/product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html'
})
export class ProductImageComponent {
  @Input() product:Product;
  @HostBinding('attr.class') cssClass = 'ui small large';

  constructor() { }
}
