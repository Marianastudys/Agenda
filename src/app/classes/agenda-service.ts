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

  // Criando método existe
  existe(c: Contato): boolean {
    const contatoEncontrado = this.#contatos.find(contato => contato.getEmail() === c.getEmail());
    return contatoEncontrado !== undefined; // Retorna true se encontrar um contato com o mesmo email, false caso contrário
  }

  // Método adicionar 
  adicionar(c: Contato): boolean { 
    if (!this.existe(c)) {
      this.#contatos.push(c);
      return true
     } 
      return false
  }
}

// Remove um contato existente na agenda.
  remover(c: Contato): boolean {
    if (!c) return false;

    // Tenta obter o índice pela referência (sugestão do exercício)
    let indice = this.#contatos.indexOf(c);

    // Caso seja um objeto com dados iguais mas referência diferente, busca por ID/Email
    if (indice === -1) {
      indice = this.#contatos.findIndex(contato => contato.email === c.email);
    }

    // Se o contato não for encontrado em nenhum dos casos, retorna false
    if (indice === -1) {
      return false;
    }

    // Remove o contato usando o splice (1 elemento a partir do índice encontrado)
    this.#contatos.splice(indice, 1);
    return true;
  }

  // Devolve toda a lista de contatos.
  obterTodos(): Contato[] {
    // Retorna uma cópia estável usando o operador spread (...) para evitar mutações diretas
    return [...this.#contatos];
  }