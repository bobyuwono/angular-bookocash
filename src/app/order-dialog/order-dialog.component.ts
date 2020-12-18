import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';

import { Order} from '../order/order';
import {Menu} from '../menu/menu';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    private store: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: OrderDialogData
  ) { }  

  menus = this.store.collection('menu').valueChanges({ idField: 'id' });
  dateCreated : Date;

  private backupOrder: Partial<Order> = { ...this.data.order };
  
  order : Order ;
  cancel():void{
    this.data.order.date = this.backupOrder.date;
    this.data.order.items = this.backupOrder.items;
    this.dialogRef.close(this.data);
  }  
  ngOnInit() {
    this.instantiateOrderTime()
  }
  instantiateOrderTime(){
    this.dateCreated = new Date();
  }

}


export interface OrderDialogData {
  order: Partial<Order>;
  enableDelete: boolean;
}

export interface OrderDialogResult {
  order: Order;
  delete?: boolean;
}