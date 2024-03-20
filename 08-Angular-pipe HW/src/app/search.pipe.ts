import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: string, gender:string): string 
  {
     if(gender.toLowerCase()=="male")
     return "Mr. "+value;
    else
    return "Miss. "+value;
  }
}