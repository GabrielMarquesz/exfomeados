
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Order {
  id: number;
  customerName: string;
  items: { productName: string; quantity: number; price: number }[];
  total: number;
  address: string;
  phone: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      customerName: 'Carlos Silva',
      items: [
        { productName: 'Brownie', quantity: 2, price: 5.0 },
        { productName: 'Cookie', quantity: 3, price: 3.5 }
      ],
      total: 20.5,
      address: 'Rua dos Alfeneiros, 4',
      phone: '+55 11 99999-9999',
      status: 'Em preparação'
    }
  ];

  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);
  orders$ = this.ordersSubject.asObservable();

  updateOrderStatus(id: number, status: string) {
    const order = this.orders.find(order => order.id === id);
    if (order) {
      order.status = status;
      this.ordersSubject.next(this.orders);
    }
  }
}
