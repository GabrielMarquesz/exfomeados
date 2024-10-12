
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';/*formulario*/ 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { CartService } from './services/cart.service'; // Importar o serviço
import { ProductListComponent } from './product-list/product-list.component'; // Importar o componente
import { CartComponent } from './cart/cart.component'; // Importar o componente
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';  // Adicione esta linha


@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent, 
    DeliveryFormComponent,
    CartComponent],


  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule,],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, [CartService]],

  bootstrap: [AppComponent],
})
export class AppModule {}

