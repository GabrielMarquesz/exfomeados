import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { LoginComponent } from './LoginComponent/login.component';
import { AuthGuard } from './auth.guard'; // Guard de autenticação (vamos criar em seguida)


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  { path: 'product-list', component: ProductListComponent }, // Lista de produtos
  
  { path: 'cart', component: CartComponent }, // Carrinho

  { path: 'delivery-form', component: DeliveryFormComponent },  // Rota para o formulário de delivery,



/*
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  { path: 'order-management', component: OrderManagementComponent, canActivate: [AuthGuard] }, // Rota protegida

 */


  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Rota inicial
  { path: 'login', component: LoginComponent }, // Tela de login
  { path: 'order-management', component: OrderManagementComponent }, // Tela de gerenciamento
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


