import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../services/cep.servise';
import { CartService } from '../services/cart.service';
import { FirebaseService } from '../services/firebase.service'; // Adicionado
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  deliveryForm!: FormGroup;
  cartItems: { product: Product; quantity: number }[] = [];
  total: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private cartService: CartService,
    private firebaseService: FirebaseService, // Adicionado
    private router: Router
  ) {}

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      cep: ['', Validators.required],
      address: ['', Validators.required],
      houseNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });

    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  buscarEndereco(cep: string) {
    this.cepService.buscarCep(cep).subscribe(
      (dados: any) => {
        this.deliveryForm.patchValue({
          address: dados.logradouro,
        });
      },
      (error) => {
        console.error('Erro ao buscar o CEP:', error);
      }
    );
  }

  calculateTotal() {
    this.total = this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  enviarPedidoWhatsApp() {
    if (this.deliveryForm.valid) {
      const formValues = this.deliveryForm.value;
      let mensagem = `CONFIRMAÇÃO DO PEDIDO!\nNome: ${formValues.name}\nTelefone: ${formValues.phone}\n`;
      mensagem += `Endereço: ${formValues.address}, ${formValues.houseNumber}\nForma de pagamento: ${formValues.paymentMethod}\n\n`;
      mensagem += 'Pedido:\n';

      this.cartItems.forEach((item) => {
        mensagem += `- ${item.product.name} (Quantidade: ${item.quantity}) - R$ ${
          item.product.price * item.quantity
        }\n`;
      });

      mensagem += `\nTotal: R$ ${this.total}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=5521998343416&text=${encodeURIComponent(
        mensagem
      )}`;
      window.open(whatsappUrl);
    } else {
      console.log('Formulário inválido');
    }
  }

  // Função para salvar o pedido no Firestore
  salvarPedidoFirebase() {
    if (this.deliveryForm.valid) {
      // Criar o pedido com os dados do formulário e itens do carrinho
      const pedido = {
        ...this.deliveryForm.value,
        items: this.cartItems,
        total: this.total,
      };

      // Log para verificar os dados do pedido antes de enviar
      console.log('Pedido a ser enviado para o Firestore:', pedido);

      // Chamar o serviço Firebase para salvar o pedido
      this.firebaseService
        .salvarPedido(pedido)  // Usando o serviço Firebase para salvar no Firestore
        .then(() => {
          console.log('Pedido enviado para o Firestore com sucesso.');
          this.router.navigate(['/sucesso']);  // Navegar para a tela de sucesso
        })
        .catch((error) => {
          console.error('Erro ao enviar pedido para o Firestore:', error);
        });
    } else {
      console.log('Formulário inválido');
    }
  }
}
