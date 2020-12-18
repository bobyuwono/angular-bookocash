import { Component, Input, Output, EventEmitter } from '@angular/core';

import {CartService} from '../cart.service';
import { Menu } from '../menu/menu';
import { Order } from '../order/order';

@Component({
  selector: 'app-order-menu-button',
  templateUrl: './order-menu-button.component.html',
  styleUrls: ['./order-menu-button.component.css']
})
export class OrderMenuButtonComponent {
  constructor(
    private cartService:CartService,
  ){}

  @Input() menu: Menu;
  @Input() dateCreated;
  @Input() order: Order;
  @Output() add = new EventEmitter<Menu>();
  
  addToCart(menu){
    this.cartService.addToCart(menu,this.dateCreated,this.order);
  }
}
