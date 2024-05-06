import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('NDrake', 'NoseQuien'),
    new Persona('Laura', 'Juarez'),
    new Persona('Romina', 'Lara'),
  ];
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
