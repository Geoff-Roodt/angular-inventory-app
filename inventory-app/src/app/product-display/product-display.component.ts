import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html'
})
export class ProductDisplayComponent {
  @Input() price:number;

  constructor() { }
}
