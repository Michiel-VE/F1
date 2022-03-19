import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  transform(value: string): number {
    const today = new Date().getFullYear();
    const birthDay = new Date(value).getFullYear();
    return today - birthDay;
  }
}
