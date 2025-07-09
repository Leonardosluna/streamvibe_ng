import { Component } from '@angular/core';

import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { Filme } from './componentes/filme/filme';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Filme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'streamvibe';
}
