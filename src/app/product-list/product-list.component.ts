/*// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Brownie',
      price: 6,
      quantity: 0, // Inicialmente 0, será atualizado ao adicionar ao carrinho
      image: 'assets/WhatsApp Image 2024-09-22 at 08.45.46.jpeg',
    },
    {
      id: 2,
      name: 'torta de limão',
      price: 10,
      quantity: 0,
      image: 'assets/torta de limao.jpeg',
    },
    {
      id: 3,
      name: 'Bolo de cenoura',
      price: 10,
      quantity: 0,
      image: 'assets/WhatsApp Image 2024-09-22 at 08.45.46 (1).jpeg',
    },
    {
      id: 4,
      name: 'Banoffee',
      price: 10,
      quantity: 0,
      image: 'assets/banoffee.jpeg',
    },
    {
      id: 5,
      name: 'Torta de maracujá',
      price: 12,
      quantity: 0,
      image: 'assets/torta de maracuja.jpeg',
    },
  ];

  cartIds: Set<number> = new Set();
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCartIds();
    this.updateTotal();
  }

  addToCart(product: Product) {
    const existingProduct = this.cartService.getCart().find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++; // Incrementa a quantidade existente
      product.quantity++; // Atualiza a quantidade exibida na lista de produtos
    } else {
      product.quantity = 1; // Inicia a quantidade em 1
      this.cartService.addProduct({ ...product }); // Adiciona novo produto com a quantidade correta
    }

    this.updateCartIds();
    this.updateTotal();
  }

  removeFromCart(productId: number) {
    const existingProduct = this.cartService.getCart().find(p => p.id === productId);
    if (existingProduct) {
      existingProduct.quantity--; // Decrementa a quantidade
      this.products.find(p => p.id === productId)!.quantity--; // Atualiza a quantidade exibida na lista de produtos

      if (existingProduct.quantity <= 0) {
        this.cartService.removeProduct(productId); // Remove do carrinho se a quantidade for 0
        this.updateCartIds();
      }
    }
    this.updateTotal();
  }

  updateCartIds() {
    const cart = this.cartService.getCart();
    this.cartIds = new Set(cart.map(p => p.id));
  }

  updateTotal() {
    this.total = this.cartService.getTotal();
  }
}*/


import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'; // Ajuste o caminho conforme necessário
import { Product } from '../models/product.model'; // Ajuste o caminho conforme necessário
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // Declaração do array de produtos
  products: Product[] = [
    
      {
        id: 1,
        name: 'Brownie',
        price: 6,
        quantity: 0, // Inicialmente 0, será atualizado ao adicionar ao carrinho
        image: 'assets/WhatsApp Image 2024-09-22 at 08.45.46.jpeg',
      },
      {
        id: 2,
        name: 'torta de limão',
        price: 10,
        quantity: 0,
        image: 'assets/torta de limao.jpeg',
      },
      {
        id: 3,
        name: 'Bolo de cenoura',
        price: 10,
        quantity: 0,
        image: 'assets/WhatsApp Image 2024-09-22 at 08.45.46 (1).jpeg',
      },
      {
        id: 4,
        name: 'Banoffee',
        price: 10,
        quantity: 0,
        image: 'assets/banoffee.jpeg',
      },
      {
        id: 5,
        name: 'Torta de maracujá',
        price: 12,
        quantity: 0,
        image: 'assets/torta de maracuja.jpeg',
      },
    ];
  
  

  cartTotal: number = 0; // Inicializa o total do carrinho

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.calculateCartTotal(); // Chama a função para calcular o total do carrinho
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product); // Adiciona o produto ao carrinho
    this.calculateCartTotal(); // Atualiza o total do carrinho
  }

  removeFromCart(productId: number) {
    this.cartService.removeProduct(productId); // Remove o produto do carrinho
    this.calculateCartTotal(); // Atualiza o total do carrinho
  }

  getCartQuantity(productId: number): number {
    const cart = this.cartService.getCart();
    const item = cart.find(item => item.product.id === productId);
    return item ? item.quantity : 0; // Retorna a quantidade do produto no carrinho ou 0 se não estiver
  }

  isInCart(productId: number): boolean {
    return this.cartService.getCart().some(item => item.product.id === productId); // Verifica se o produto está no carrinho
  }

  goToCart() {
    this.router.navigate(['/cart']); // Navega para a página do carrinho
  }

  calculateCartTotal() {
    this.cartTotal = this.cartService.getTotal(); // Atualiza o total do carrinho
  }
}



