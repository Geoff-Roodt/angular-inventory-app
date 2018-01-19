import { Component, EventEmitter } from '@angular/core';
import {Product} from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory App';
  products:Product[];

  constructor(){
    this.products = [
      new Product('Jacket', 'A blue jacket', '../assets/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 500.15),
      new Product('Shoes', 'Black running shoes', '../assets/products/black-shoes.jpg', ['Men', 'Shoes', 'Running'], 109.99),
      new Product('Hat', 'A nice black hat', '../assets/products/black-hat.jpg', ['Men', 'Accessories', 'Headware'], 45.00),
    ];
  }

  productWasSelected(product: Product) :void{
    console.log('Product clicked: ', product);
  }

}
