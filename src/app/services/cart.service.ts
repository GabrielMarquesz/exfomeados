
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; // Certifique-se de que o modelo Produto está definido

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  // Obtém os itens do carrinho
  getCart() {
    return this.cart;
  }

  // Adiciona um produto ao carrinho
  addProduct(product: Product) {
    const item = this.cart.find((i) => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  // Remove um produto do carrinho
  removeProduct(productId: number) {
    const itemIndex = this.cart.findIndex((i) => i.product.id === productId);
    if (itemIndex > -1) {
      if (this.cart[itemIndex].quantity > 1) {
        this.cart[itemIndex].quantity--;
      } else {
        this.cart.splice(itemIndex, 1);
      }
    }
  }

  // Limpa o carrinho
  clearCart() {
    this.cart = [];
  }

  // Calcula o total do carrinho
  getTotal() {
    return this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }
}
