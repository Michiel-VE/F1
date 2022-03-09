import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'age'})
export class  AgePipe implements PipeTransform{
  transform(value: string) {
    let today = new Date().getFullYear();
    let birthDay = new Date(value).getFullYear();
    return today - birthDay;
  }

}
