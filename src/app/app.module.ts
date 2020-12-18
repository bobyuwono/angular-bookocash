import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { SalesComponent } from './sales/sales.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { environment } from 'src/environments/environment';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { OrderMenuButtonComponent } from './order-menu-button/order-menu-button.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    SalesComponent,
    OrderComponent,
    DashboardComponent,
    MenuPageComponent,
    MenuDialogComponent,
    OrderPageComponent,
    OrderDialogComponent,
    OrderMenuButtonComponent,
    
  ],
  imports: [
    
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
