import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestComponent } from './first-test.component';

describe('FirstTestComponent', () => {
  let component: FirstTestComponent;
  let fixture: ComponentFixture<FirstTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FirstTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Les 'it' seront chacun des scénarios testés
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Scénario vérifie que le titre est égal à 'Liste des utilisateurs'
  it('should have the correct title', () => {
    // Je peux me permettre de ne pas utiliser d'id et de sélectionner directement le premier h2 de mon dom
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toBe('Liste des utilisateurs')
  });

  it('should add a user to the list when the button is clicked', () => {
    // ARRANGE
    const button = fixture.nativeElement.querySelector('#myButton');  // Avec un id pour sélectionner le bon button

    // ACT
    button.click();
    fixture.detectChanges(); // QUand j'agis sur le dom, je dois rappeler detectChanges() pour que mon "fixture" soit mis à jour

    // ASSERT
    const users = fixture.nativeElement.querySelectorAll('li');
    expect(users.length).toBe(3)
    expect(users[2].textContent).toBe('Nouvel utilisateur')
  });

  // TEST -> LE OUTPUT EMET BIEN LA DONNEE ATTENDUE
  it('should emit data when the button is clicked', () => {
    // ARRANGE
    const button = fixture.nativeElement.querySelector('#myOutputButton');
    let emittedData: string;

    component.myEvent.subscribe(data => emittedData = data);

    //ACT
    button.click();
    fixture.detectChanges();

    // ASSERT
    expect(emittedData!).toEqual('some data')
  });


  // TEST DE l'INPUT
  it("should display the input value", () => {

    component.myInput = "Nouvelle valeur affichée";
    fixture.detectChanges();

    const p = fixture.nativeElement.querySelector('#myP');
    console.log("OUTPUT TEST", p.textContent)
    expect(p.textContent.trim()).toBe("input affichée : Nouvelle valeur affichée")
  })

});
