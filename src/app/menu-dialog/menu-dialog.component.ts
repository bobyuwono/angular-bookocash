import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css']
})
export class MenuDialogComponent implements OnInit {
  private backupMenu: Partial<Menu> = { ...this.data.menu };

  constructor(
    public dialogRef: MatDialogRef<MenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuDialogData
  ) { }
  
  cancel():void{
    this.data.menu.title = this.backupMenu.title;
    this.data.menu.description = this.backupMenu.description;
    this.data.menu.price = this.backupMenu.price;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}

export interface MenuDialogData {
  menu: Partial<Menu>;
  enableDelete: boolean;
}

export interface MenuDialogResult {
  menu: Menu;
  delete?: boolean;
}