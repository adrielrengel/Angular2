import {Component} from 'angular2/core';
import {Cliente} from './cliente';
@Component({
    selector: 'meu-app',
    template: `
    <h1>{{titulo}}</h1>
    <h2>Cliente selecionado: {{cliente.nome}}</h2>
    <ul>
      <li *ngFor="#cli of clientes">
          {{cli.id}}: {{cli.nome}}
        </li>
      </ul>
      <p *ngIf="clientes.length < 1">Nenhum cliente encontrado.</p>
      `
})


export class AppComponent {
    titulo = 'Listagem de clientes';
    clientes = [];
    cliente = new Cliente(1, 'Fulano');
}
