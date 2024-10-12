/*
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model'; // Certifique-se de que você tenha um modelo de Produto
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  // Carrega o carrinho ao inicializar a página
  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  // Calcula o total da compra
  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  // Remove um item do carrinho
  removeFromCart(productId: number) {
    this.cartService.removeProduct(productId);
    this.loadCart(); // Atualiza o carrinho
  }

  // Limpa o carrinho
  clearCart() {
    this.cartService.clearCart();
    this.loadCart(); // Atualiza o carrinho
  }

  // Redireciona para o formulário de entrega
  goToDeliveryForm() {
    // Navegação para a página do formulário de entrega
    // Aqui você pode usar o Router, por exemplo
    this.router.navigate(['/delivery-form']);
  }
}

*/import { Component } from '@angular/core';
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



