import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }

    const cleanedValue = value.replace(/\D/g, '');

    if (cleanedValue.length <= 2) {
      return `(${cleanedValue}`;
    } else if (cleanedValue.length <= 7) {
      return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2)}`;
    } else {
      return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7)}`;
    }
  }
}
