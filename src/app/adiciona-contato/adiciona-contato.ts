import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Contato } from '../classes/contato';
import { AgendaService } from '../classes/agenda-service';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContatoComponent {

  formulario: FormGroup;
  contatos: Contato[] = [];

  constructor(
    private fb: FormBuilder,
    private agendaService: AgendaService
  ) {

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aniversario: [''],
      tipo: ['']
    });

    this.contatos = this.agendaService.obterTodos();
  }

  adicionarContato(): void {

    if (this.formulario.valid) {

      const novoContato = new Contato(
        this.formulario.value.nome,
        this.formulario.value.telefone,
        this.formulario.value.email,
        this.formulario.value.aniversario,
        this.formulario.value.tipo
      );

      const adicionado = this.agendaService.adicionar(novoContato);

      if (adicionado) {
        this.contatos = this.agendaService.obterTodos();
        this.formulario.reset();
      } else {
        alert('Já existe um contato com este e-mail.');
      }
    }
  }

  removerContato(contato: Contato): void {

    const removido = this.agendaService.remover(contato);

    if (removido) {
      this.contatos = this.agendaService.obterTodos();
    }
  }

}