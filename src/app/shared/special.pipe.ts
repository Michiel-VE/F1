import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'specialCharacters' })
export class SpecialPipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes('é')) {
      value = value.split('é').join('e');
    }

    if (value.includes('è')) {
      value = value.split('è').join('e');
    }

    if (value.includes('ä')) {
      value = value.split('ä').join('a');
    }

    if (value.includes('ö')) {
      value = value.split('ö').join('o');
    }

    if (value.includes('ü')) {
      value = value.split('ü').join('u');
    }

    return value;
  }

}
