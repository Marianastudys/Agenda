import { Component } from '@angular/core';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato';

@Component({
  selector: 'app-root',
  imports: [AdicionaContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}