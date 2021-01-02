import { Component, OnInit, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../order/order';
import { Menu } from '../menu/menu';
import { MenuService } from '../menu.service';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  constructor(
    private menuService: MenuService,
    private orderService : OrderService
    ) {}

  menus: Observable<Menu[]>;
  basket = [];
  total:number = 0 ;
  dateCreated: Date;

  ngOnInit() {
    this.getmenu()
  }

  //add menu to basket before being sent to order queue
  addToBasket(menu: Menu){
    this.basket.push(menu);
    let price = (menu.price);
    let convertedPrice= Number(price)
    this.countTotal(convertedPrice);
    this.basket.sort((a, b) => (a.title > b.title) ? 1 : -1)
    console.log(this.basket);
    console.log(this.total)
  }

  countTotal(price:number){
    this.total += price;
  }

  upload(basket, total){
    this.orderService.uploadToFire(basket,total)
  }

  getmenu() {
    this.menus = this.menuService.getMenu()
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