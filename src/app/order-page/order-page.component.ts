import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';

import {OrderDialogComponent} from '../order-dialog/order-dialog.component';
import {OrderDialogResult} from '../order-dialog/order-dialog.component';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(private dialog: MatDialog, private store: AngularFirestore) { }
  
  orders = this.store.collection('order').valueChanges({ idField: 'id' });

  ngOnInit(): void {
  }

  makeOrder(): void{
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '800px',
      data: {
        order: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: OrderDialogResult) => this.store.collection('order').add(result.order) );
  }
}
