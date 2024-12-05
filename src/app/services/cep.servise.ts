

// src/app/services/cep.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private viaCepUrl = 'https://viacep.com.br/ws';  // URL base da API ViaCEP

  constructor(private http: HttpClient) { }

  // Método para buscar informações do CEP
  buscarCep(cep: string): Observable<any> {
    return this.http.get(`${this.viaCepUrl}/${cep}/json/`);
  }
}
