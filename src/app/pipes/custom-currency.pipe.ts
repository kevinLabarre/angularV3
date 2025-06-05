import { CurrencyPipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  // currencyPipe = inject(CurrencyPipe);
  constructor(private currencyPipe: CurrencyPipe) { }
  transform(
    value: number | null | undefined,
    currencyCode: string = 'EUR',
    display: 'code' | 'symbol' | 'symbol-narrow' | string | boolean = 'symbol',
    digitsInfo: string = '1.2-2',
    locale: string = 'fr'
  ): string | null {
    // Utiliser le pipe currency standard pour formatter la valeur
    const formattedValue = this.currencyPipe.transform(
      value,
      currencyCode,
      display,
      digitsInfo,
      locale
    );

    // Si la valeur est null, retourner null
    if (formattedValue === null) {
      return null;
    }

    // Remplacer les espaces entre les chiffres par des points
    return formattedValue.replace(/(\d)\s+(\d)/g, '$1.$2');
  }

  // ==>
  //   Voici ce qui se passe:

  // L'expression régulière /(\d)\s+(\d)/g recherche un modèle spécifique :
  // (\d): Premier groupe de capture - un chiffre(le \d signifie "digit" ou chiffre)
  // \s + : Un ou plusieurs espaces blancs
  // (\d) : Deuxième groupe de capture - un autre chiffre
  // g: Drapeau global qui cherche toutes les occurrences dans la chaîne
  // Dans la chaîne de remplacement '$1.$2' :
  // $1 représente le contenu du premier groupe de capture(le premier chiffre)
  // '.' est un point littéral qui sera inséré entre les chiffres
  // $2 représente le contenu du deuxième groupe de capture(le deuxième chiffre)
}
