
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importação para redirecionamento

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Campo do nome de usuário
  password: string = ''; // Campo da senha

  // Usuário e senha pré-definidos (alterar conforme necessário)
  private readonly adminUsername: string = 'dono';
  private readonly adminPassword: string = 'senha123';

  constructor(private router: Router) {} // Injeta o roteador

  login() {
    if (this.username === this.adminUsername && this.password === this.adminPassword) {
      // Redireciona para a tela de gerenciamento de pedidos
      this.router.navigate(['/order-management']);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}
