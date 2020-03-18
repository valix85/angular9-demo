import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/model/persona';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nxt-hello',
  templateUrl: './hello.component.html',
  /*
  template: `<div>
    <p>Hello World da inner template</p>
  </div>`,
  */
  styleUrls: ['./hello.component.css']
  /*
  styles: [`
  *{ color: red;}
  `]
  */
})
export class HelloComponent implements OnInit {


  persona: Persona;

  // costruttore
  constructor() {
      this.persona = {nome: 'Valerio', cognome: 'Radice'};
      this.persona.eta = 34;
      // this.persona.punti = 300;
      console.log(this.persona);
  }

  ngOnInit(): void {
  }

  cambia(formItem: FormControl): void {
    console.log('Invocata funzione cambia', formItem.value);
    this.persona.nome = formItem.value;
  }

}// end class
