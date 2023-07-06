import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }

    const valorLimpo = value.replace(/\D/g, '');

    if (valorLimpo.length <= 3) {
      return valorLimpo;
    } else if (valorLimpo.length <= 6) {
      return `${valorLimpo.substr(0, 3)}.${valorLimpo.substr(3)}`;
    } else if (valorLimpo.length <= 9) {
      return `${valorLimpo.substr(0, 3)}.${valorLimpo.substr(3, 3)}.${valorLimpo.substr(6)}`;
    } else {
      return `${valorLimpo.substr(0, 3)}.${valorLimpo.substr(3, 3)}.${valorLimpo.substr(6, 3)}-${valorLimpo.substr(9)}`;
    }
  }
}
