import { Component, signal } from '@angular/core';
import { ConsultantList } from './components/consultant-list/consultant-list';

@Component({
  selector: 'app-root',
  imports: [ConsultantList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Galeria de Consultores');
  protected readonly description = signal('Encontre o consultor ideal para suas necessidades.');

}
