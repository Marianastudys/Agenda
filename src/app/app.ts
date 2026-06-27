import { Component } from '@angular/core';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato';
import { Cabecalho } from './cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  imports: [AdicionaContatoComponent, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}