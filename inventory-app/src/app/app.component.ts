import { Component, EventEmitter } from '@angular/core';

// Import the Product model to access its properties and methods
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
    // Initialise our list of products to be displayed on the webpage
    this.products = [
      new Product('Jacket', 'A blue jacket', '../assets/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 500.15),
      new Product('Shoes', 'Black running shoes', '../assets/products/black-shoes.jpg', ['Men', 'Shoes', 'Running'], 109.99),
      new Product('Hat', 'A nice black hat', '../assets/products/black-hat.jpg', ['Men', 'Accessories', 'Headware'], 45.00),
    ];
  }

  // Write to the browser's developer console the product name when ever it is clicked
  productWasSelected(product: Product) :void{
    console.log('Product clicked: ', product);
  }

}
