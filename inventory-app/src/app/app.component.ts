import { Component } from '@angular/core';
import {Product} from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory App';
  product:Product;

  constructor(){
    this.product = new Product('Jacket', 'A blue jacket', './assets/images/products/blue-jacket.jpg', ['Men', 'Accessories', 'Jackets'], 90.00);
  }

}
