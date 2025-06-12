import { Product } from './../models/product';
import { Action } from '@ngrx/store';
import { addProduct, updateProduct, removeProduct } from './products.actions';

export interface ProductsState {
  products: Product[];
}

export const initialProductsState: ProductsState = {
  products: []
};

export function productReducer(state = initialProductsState, action: Action): ProductsState {
  switch (action.type) {
    case addProduct.type: {
      const product = (action as any).product as Product;
      return {
        ...state,
        products: [...state.products, product]
      };
    }
    case updateProduct.type: {
      const product = (action as any).product as Product;
      return {
        ...state,
        products: state.products.map(p => p.id === product.id ? product : p)
      };
    }
    case removeProduct.type: {
      const productId = (action as any).productId as string;
      return {
        ...state,
        products: state.products.filter(p => p.id !== productId)
      };
    }
    default:
      return state;
  }
}