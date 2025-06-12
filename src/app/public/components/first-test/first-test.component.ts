import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-test',
  imports: [],
  templateUrl: './first-test.component.html',
  styleUrl: './first-test.component.css'
})
export class FirstTestComponent {
  title = 'Liste des utilisateurs';
  users = ['Utilisateur 1', 'Utilisateur 2'];

  @Output() myEvent = new EventEmitter<any>();

  @Input() myInput = '';


  addUser() {
    this.users.push('Nouvel utilisateur');
  }

  // Exécuter la méthode passée par le parent via le "@Output"
  handleClick() {
    this.myEvent.emit('some data')
  }
}
