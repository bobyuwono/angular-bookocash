import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu: Menu;
  @Output() edit = new EventEmitter<Menu>();
}