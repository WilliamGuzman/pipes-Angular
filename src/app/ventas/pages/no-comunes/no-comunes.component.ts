import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; //Efecto de burbuja al dar click para desplegar la info en el componente p-fieldset
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  //i18nSelect
  nombre: string = 'William';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  bandera: boolean = true;

  //i18nPrural
  clientes: string[] = ['Maria', 'Juan', 'Jose', 'Carlos', 'Mereling'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente( valor:boolean ){

    if (valor) {
      this.nombre = 'William';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }

    this.bandera = valor;

  }

  borrarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'William',
    edad: 50,
    pais: 'Costa Rica'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve,reject) => {

    setTimeout(() => {
        resolve('Promesa resuelta');
    }, 3500);
  });
}
