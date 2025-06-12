import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

//export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);
export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ productId: string }>()
);
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);