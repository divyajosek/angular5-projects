import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empName'
})
export class EmpNamePipe {

  transform(value: any,greeting :string): any {
    if(value){
     return (greeting + " " +value.slice(0,2).toUpperCase());
    }else
    return value;

  /*  if(value <20)
    {
      return ("Jr.");
    }
    else
    {
      return "Sr.";
    }*/
    
  }

}
