import { Component, Input,Output,EventEmitter } from '@angular/core';

import {Order} from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
  @Input() order:Order;
  @Output() edit = new EventEmitter<Order>();
}
