/*import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css'],
})
export class OrderManagementComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    // Busca os pedidos do serviço ao carregar o componente
    this.orders = this.orderService.getOrders();
  }

  // Atualiza o status do pedido
  updateOrderStatus(order: any, status: string) {
    const index = this.orders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.orders[index].status = status;
      alert(`O pedido #${order.id} foi atualizado para: ${status}`);
    }
  }

  // Define as cores baseadas no status
  getStatusColor(status: string): string {
    switch (status) {
      case 'Pendente':
        return 'text-warning';
      case 'Em Andamento':
        return 'text-primary';
      case 'Concluído':
        return 'text-success';
      case 'Cancelado':
        return 'text-danger';
      default:
        return '';
    }
  }
}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css'],
})
export class OrderManagementComponent {
  orders = [
    {
      id: 1,
      customer: 'João Silva',
      address: 'Rua Principal, 123',
      phone: '(11) 99999-9999',
      paymentMethod: 'Dinheiro',
      total: 50.0,
      status: 'Pendente',
    },
    {
      id: 2,
      customer: 'Maria Oliveira',
      address: 'Av. Brasil, 456',
      phone: '(11) 98888-8888',
      paymentMethod: 'Cartão',
      total: 100.0,
      status: 'Em Andamento',
    },
  ];

  // Atualiza o status do pedido
  updateOrderStatus(order: any, status: string) {
    const index = this.orders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.orders[index].status = status;
      alert(`O pedido #${order.id} foi atualizado para: ${status}`);
    }
  }

  // Define as cores baseadas no status
  getStatusColor(status: string): string {
    switch (status) {
      case 'Pendente':
        return 'text-warning';
      case 'Em Andamento':
        return 'text-primary';
      case 'Concluído':
        return 'text-success';
      case 'Cancelado':
        return 'text-danger';
      default:
        return '';
    }
  }
}
