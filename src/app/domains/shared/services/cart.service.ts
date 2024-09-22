import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(()=>{
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor() { }

  addToCar(produt: Product){
    this.cart.update(state => [...state, produt]);
  }
}
