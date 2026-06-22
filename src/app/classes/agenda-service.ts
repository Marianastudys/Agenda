import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[]

  constructor() {
    this.#contatos = []
  }

  

  adicionar(c: Contato): boolean {
    if (c) {
      this.#contatos.push(c)
      return true
    }
    return false
  }

  obterTodos(): Contato[] {
    return [...this.#contatos]
  }


}