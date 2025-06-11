import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {

  count: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      document.title = `Count : ${this.count()}`
    })
  }

  increment() {
    this.count.update((prev) => prev + 1)
  }

  reset() {
    this.count.set(0);
  }

  countCarre = computed(() => this.count() * this.count())
}
