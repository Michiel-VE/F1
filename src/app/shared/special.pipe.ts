import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'specialCharacters'})
export class SpecialPipe implements PipeTransform{
  transform(value: string) {
    if (value.includes('é')){
      return value.split('é').join('e');
    }

    if (value.includes('è')){
      return value.split('è').join('e');
    }

    if (value.includes('ä')){
      value = value.split('ä').join('a');
      return value.split('ö').join('o');

    }

    if (value.includes('ö')){
      return value.split('ö').join('o');
    }

    return value;
  }

}
