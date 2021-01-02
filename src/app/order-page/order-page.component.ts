import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { AngularFirestore } from '@angular/fire/firestore';

import {OrderDialogComponent} from '../order-dialog/order-dialog.component';
import {OrderDialogResult} from '../order-dialog/order-dialog.component';

import {OrderService} from '../order.service';
import { Observable } from 'rxjs';
import { Order } from '../order/order';



@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})

export class OrderPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog, 
    private store: AngularFirestore,
    private orderService: OrderService,
    ) { }
  
 
  // displayedColumns: string[]  = ['id', 'date', 'total items','total price']; 
  orders:Observable<Order[]> = this.orderService.getOrders()
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.orders;

  ngOnInit() {   

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
