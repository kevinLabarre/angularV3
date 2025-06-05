import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  @Input() error: string = "Données non chargées ! Vérifiez si le serveur 'back' est lancé"

}
