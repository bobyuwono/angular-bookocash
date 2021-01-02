import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { MatDialog } from '@angular/material/dialog';

import { Order } from './order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private store: AngularFirestore) {}

  uploadToFire(basket, total) {
    this.store.collection<Order>('order').add(
      { date: new Date(), items: basket, total: total}
    )
  }

  getOrders(){
    return this.store.collection<Order>('order').valueChanges();
  }

}
