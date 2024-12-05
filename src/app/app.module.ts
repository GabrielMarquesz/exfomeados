import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../firebaseConfig';
import { FirebaseService } from './services/firebase.service';
import { CartService } from './services/cart.service';
import { CepService } from './services/cep.servise';

import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { LoginComponent } from './LoginComponent/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    DeliveryFormComponent,
    OrderManagementComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    FirebaseService,
    CartService,
    CepService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
