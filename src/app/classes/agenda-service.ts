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


  existe(c: Contato): boolean {
    const contatoEncontrado = this.#contatos.find(contato => contato.getEmail() === c.getEmail());
    return contatoEncontrado !== undefined; 
  }

  
  adicionar(c: Contato): boolean { 
    if (!this.existe(c)) {
      this.#contatos.push(c);
      return true
     } 
      return false
  }

  
  remover(c: Contato): boolean {
    if (this.existe(c)) {
      const indice = this.#contatos.indexOf(c); 
      this.#contatos.splice(indice, 1);
      return true;
    }
     return false;
  }

  obterTodos(): Contato[] {
    return this.#contatos;
  }

}