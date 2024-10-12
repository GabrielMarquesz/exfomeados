/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent {
  deliveryForm: FormGroup;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.deliveryForm = this.fb.group({
      name: [''],
      address: [''],
      cep: [''],
      paymentMethod: ['']
    });
  }

  submitDelivery() {
    const formData = this.deliveryForm.value;
    const cartItems = this.cartService.getCart();
    const total = this.cartService.getTotal();

    // Monta a mensagem do pedido para WhatsApp
    let message = `Pedido de ${formData.name}\nEndereço: ${formData.address}\nCEP: ${formData.cep}\nForma de Pagamento: ${formData.paymentMethod}\n\nProdutos:\n`;

    cartItems.forEach(item => {
      message += `${item.product.name} - Quantidade: ${item.quantity} - Preço: R$ ${item.product.price * item.quantity}\n`;
    });

    message += `\nTotal: R$ ${total}`;

    // Enviar para WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5521991172938&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  deliveryForm: FormGroup;
  total: number = 0;
  cartItems: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
    this.deliveryForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      cep: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  submitDelivery() {
    if (this.deliveryForm.valid) {
      const orderDetails = this.cartItems.map(item => {
        return `${item.quantity}x ${item.product.name} - R$${item.product.price}`;
      }).join(', ');

      const deliveryInfo = this.deliveryForm.value;
      const message = `Confirmação do Pedido: ${orderDetails}\nTotal: R$${this.total}\nNome: ${deliveryInfo.name}\nEndereço: ${deliveryInfo.address}\nCEP: ${deliveryInfo.cep}\nForma de Pagamento: ${deliveryInfo.paymentMethod}`;

      window.open(`https://wa.me/5521964717752?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}

