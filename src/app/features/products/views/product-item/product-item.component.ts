import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent {
  @Input() 
  product: Product = {
    id: '0',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: '',
    inStock: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}
