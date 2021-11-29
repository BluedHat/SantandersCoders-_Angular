import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  searchString: string = '';
  propNam: string = '';
  value: any = [];

  transform(value:any[], searchString:string, propName:string): any[] {
    const result: any =[];
    if(!value || searchString==='' || propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(searchString.toLocaleLowerCase())){
        result.push(a);      }
    });
    return result;
  }

}
