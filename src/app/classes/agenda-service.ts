import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[];

  constructor() {
    this.#contatos = [];
  }

  adicionar(c: Contato): boolean {
    if (!c) return false;

    // Verifica se já existe um contato com o mesmo email (ou use c.id)
    const jaExiste = this.#contatos.some(contato => contato.email === c.email);

    if (jaExiste) {
      return false; // Retorna false se o contato já estiver na agenda
    }

    this.#contatos.push(c);
    return true; // Retorna true se foi adicionado com sucesso
  }

  obterTodos(): Contato[] {
    return [...this.#contatos];
  }
}