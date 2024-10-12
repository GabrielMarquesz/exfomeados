/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addProduct(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeProduct(productId: number) {
    const productIndex = this.cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
      if (this.cart[productIndex].quantity > 1) {
        this.cart[productIndex].quantity--;
      } else {
        this.cart.splice(productIndex, 1);
      }
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}*/









/*
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; // Ajuste o caminho conforme necessário


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  addProduct(product: Product) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item) {
      item.quantity++; // Aumenta a quantidade se já estiver no carrinho
    } else {
      this.cart.push({ product, quantity: 1 }); // Adiciona o novo produto
    }
  }

  removeProduct(productId: number) {
    this.cart = this.cart.filter(item => item.product.id !== productId); // Remove o produto
  }

  getCart() {
    return this.cart; // Retorna os produtos do carrinho
  }

  clearCart() {
    this.cart = []; // Limpa o carrinho
  }

  getTotal() {
    return this.cart.reduce((total, item) => {
      return total + item.product.price * item.quantity; // Calcula o total
    }, 0);
  }
}
*/




/*
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  // Adiciona produto ao carrinho
  addProduct(product: Product) {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  // Remove uma unidade do produto do carrinho
  removeProduct(productId: number) {
    const existingItem = this.cart.find(item => item.product.id === productId);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.cart = this.cart.filter(item => item.product.id !== productId);
      }
    }
  }

  // Retorna todos os itens do carrinho
  getCart() {
    return this.cart;
  }

  // Limpa o carrinho
  clearCart() {
    this.cart = [];
  }

  // Calcula o total do carrinho
  getTotal() {
    return this.cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  // Obtém a quantidade de um produto específico no carrinho
  getCartQuantity(productId: number): number {
    const item = this.cart.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }
}
*/





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
