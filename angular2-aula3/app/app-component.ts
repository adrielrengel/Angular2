import {Component} from 'angular2/core';
import {Cliente} from './cliente'
@Component({
  selector: 'meu-app',
  template: `
  <h1>Angular 2 - Aula 3</h1>'
  <h2>{{txtListagem | uppercase}}</h2>
  <p>O sacrificio é o {{cliente.nome}}</p>

  <ul>
    <li *ngFor="#cli of clientes; #i = index">
      <a href="#" (click)="selecionar(i)">
      {{cli.id}} - {{cli.nome}}
      </a>
    </li>
  </ul>
  `
})
export class AppComponent{
  private txtListagem: string;
  private clientes: Cliente[];
  private cliente: Cliente;

  constructor(){
      this.txtListagem  = 'LISTA DE SACRIFICIOS' ;
      this.clientes = [
        new Cliente(1,'Juca'),
        new Cliente(2,'Paulo')
      ];
      this.cliente = this.clientes[0];
  }


  selecionar(index:number ) :void {
    if(index < this.clientes.length){
      this.cliente = this.clientes[index];
    }
  }
}