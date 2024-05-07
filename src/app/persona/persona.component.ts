import { AppComponent } from './../app.component';
import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [RouterLink, AppComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent {
  @Input({ required: true }) persona!: any;
  @Input({ required: true }) indice!: any;
}
