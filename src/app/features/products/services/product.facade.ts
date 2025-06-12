import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../models/product";
import * as ProductSelectors from "../store/products.selectors";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
     products$: Observable<Product[]> = this.store.select(ProductSelectors.selectAllProducts);

    constructor(private store: Store, private productService: ProductService) {}

    loadProducts() {
        this.productService.getProducts().subscribe(products => {
            this.store.dispatch({ type: '[Product] Load Products', products });
        });
    }
};