import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { mockProducts } from '../models/mockdata';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(mockProducts);
  products$ = this.products.asObservable();
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Product[]>('http://localhost:3000/api/products').subscribe(data => {
      this.products.next(data);
    }
    );
   }

    getProducts(): Observable<Product[]> {
    // In a real application, this would be replaced with an HTTP request to fetch products from a server
    return this.products$;
  }
  getProductById(id: string) {
    // In a real application, this would be replaced with an HTTP request to fetch a product by ID from a server
    return mockProducts.find(product => product.id === id);
  }
  addProduct(product: any) {
    // In a real application, this would be replaced with an HTTP request to add a product to the server
    mockProducts.push(product);
  }
  updateProduct(id: string, updatedProduct: any) {
    // In a real application, this would be replaced with an HTTP request to update a product on the server
    const index = mockProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      mockProducts[index] = { ...mockProducts[index], ...updatedProduct };
    }
  }
  deleteProduct(id: string) {
    // In a real application, this would be replaced with an HTTP request to delete a product from the server
    const index = mockProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      mockProducts.splice(index, 1);
    }
  }
}
