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


  constructor(private fb: FormBuilder,
    private agendaService: AgendaService
  ) {

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      aniversario: [''],
      tipo: ['']
    });

  }

  adicionarContato() {

    if (this.formulario.valid) {

      const novoContato = new Contato(
        this.formulario.value.nome,
        this.formulario.value.telefone,
        this.formulario.value.email,
        this.formulario.value.aniversario,
        this.formulario.value.tipo
      );

       this.agendaService.adicionar(novoContato)

      this.formulario.reset();
    }
  }
}
