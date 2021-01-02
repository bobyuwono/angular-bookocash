import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';

import {Menu} from'../menu/menu';
import {MenuDialogComponent} from '../menu-dialog/menu-dialog.component';
import {MenuDialogResult} from '../menu-dialog/menu-dialog.component';

import {MenuService} from '../menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {


  constructor( private menuService: MenuService, private dialog: MatDialog, private store: AngularFirestore) { }

  menus :Observable<any[]>;

  ngOnInit() {
    this.getMenu()
  }

  getMenu() {
    this.menus = this.menuService.getMenu()
  }
  
  addMenu(): void {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '270px',
      data: {
        menu: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: MenuDialogResult) => this.store.collection('menu').add(result.menu) );
  }
  editMenu(list='menu', menu: Menu): void {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '270px',
      data: {
        menu,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: MenuDialogResult) => {
      if (result.delete) {
        this.store.collection(list).doc(menu.id).delete();
      } else {
        this.store.collection(list).doc(menu.id).update(menu);
      }
    });
  }

}
