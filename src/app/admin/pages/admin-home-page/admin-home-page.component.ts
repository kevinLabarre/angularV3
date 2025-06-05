import { Component, computed, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, tap } from 'rxjs';
import { FamilyCompositionResponse } from '../../interfaces/profile/family-composition-response';

@Component({
  selector: 'app-admin-home-page',
  imports: [],
  templateUrl: './admin-home-page.component.html',
  styleUrl: './admin-home-page.component.css'
})
export class AdminHomePageComponent {

  service = inject(UserService)

  user: Signal<FamilyCompositionResponse | undefined> = toSignal(this.service.getProfile())

  error: WritableSignal<string | null> = signal(null)
  isLoading: WritableSignal<boolean> = signal(false)

  // Votre approche est généralement bonne mais présente quelques points d'amélioration potentiels. Analysons-la
  // Points positifs:
  //   L'utilisation de inject() est la méthode moderne recommandée par Angular pour injecter des dépendances
  // L'utilisation des signaux s'aligne avec la direction prise par Angular pour la gestion d'état réactive
  // La conversion d'un Observable en Signal avec toSignal() est une bonne pratique pour faire le pont entre RxJS et les signaux


  //   Absence de gestion d'erreurs : La conversion avec toSignal() ne gère pas les erreurs provenant de l'Observable. Si getProfile() échoue, votre composant n'en sera pas informé.
  //   Pas d'état de chargement : Il n'y a aucun moyen de savoir si les données sont encore en cours de chargement.
  //   Gestion de la mémoire: L'Observable pourrait nécessiter un nettoyage lorsque le composant est détruit. --> PAS POUR DU HTTPCLIENT classique !


  // user: Signal<User | undefined> = toSignal(this.service.getProfile().pipe(
  //   tap({
  //     next: () => this.isLoading.set(false),
  //     error: err => this.error = err.message
  //   }),
  //   // Empêche l'erreur de se propager et transforme le flux
  //   catchError(() => EMPTY)
  //   // Alternative: catchError(() => EMPTY) si vous préférez que le signal reste undefined
  // ))


  //   Quand un Observable émet une erreur, il se termine dans cet état d'erreur. Lorsque vous utilisez toSignal() pour convertir un Observable en Signal, si l'Observable se termine par une erreur:

  //    Le Signal ne recevra jamais de valeur finale
  //    L'erreur sera propagée, ce qui pourrait causer un crash de votre application
  //    Le tap avec le gestionnaire d'erreur vous permet de réagir à l'erreur(mettre à jour vos signaux d'état), mais il ne modifie pas le flux de l'Observable.L'erreur continue à se propager après le tap.


}

