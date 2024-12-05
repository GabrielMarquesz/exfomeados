
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  
  removeFromCart(productId: number) {
    this.cartService.removeProduct(productId);
    this.calculateTotal();
  }

  goToDeliveryForm() {
    this.router.navigate(['/delivery-form']);
  }
}



