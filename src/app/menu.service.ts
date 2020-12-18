import { Injectable, Output, Input,EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, map, tap } from 'rxjs/operators';

import {Menu} from './menu/menu';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  @Input() menu:Menu;
  @Output() edit = new EventEmitter<Menu>();
  
  constructor( private store: AngularFirestore ) { }
  menus = this.store.collection('menu').valueChanges({ idField: 'id' });

  getMenu(){
       return this.menus;
  }

}
