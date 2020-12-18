import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCart(menu, timestamp, order) {
    order.date = timestamp;
    order.items.push(menu);
  }
}
