import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cart: any[] = []; // Receberá os itens do carrinho
  total: number = 0;

  customer: string = '';
  address: string = '';
  phone: string = '';
  paymentMethod: string = '';

  constructor(private orderService: OrderService, private router: Router) {}

  // Confirmar o pedido
  confirmOrder() {
    const newOrder = {
      id: Date.now(),
      customer: this.customer,
      address: this.address,
      phone: this.phone,
      paymentMethod: this.paymentMethod,
      total: this.total,
      status: 'Pendente',
    };

    // Adiciona o pedido ao serviço
    this.orderService.addOrder(newOrder);

    // Limpa o carrinho (simulação)
    this.cart = [];
    alert('Pedido confirmado com sucesso!');
    this.router.navigate(['/order-management']); // Redireciona para gerenciamento
  }
}
