import { Injectable, Output, Input,EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, map, tap } from 'rxjs/operators';

import {Menu} from './menu/menu';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  
  @Output() edit = new EventEmitter<Menu>();
  
  constructor( private store: AngularFirestore ) {}

  getMenu(){
    return this.store.collection('menu').valueChanges();
  }

}
