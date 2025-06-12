import { Component } from '@angular/core';
import { FirstTestComponent } from "../../components/first-test/first-test.component";

@Component({
  selector: 'app-first-tests',
  imports: [FirstTestComponent],
  templateUrl: './first-tests.component.html',
  styleUrl: './first-tests.component.css'
})
export class FirstTestsComponent {

}
