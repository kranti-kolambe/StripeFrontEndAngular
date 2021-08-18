import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //value: any is the output that the pipe receives.
  transform(value: any, searchTerm: string): any {
    let EmpArr:any[]=[];
    if(value.length==0){
      return value;
    }

    

  for (let i = 0; i < value.length; i++) {
    let username:string=value[i].username; 
    let status:string=value[i].status;  
    let dept:string=value[i].dept;
    
    if(username.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        EmpArr.push(value[i]);
    }else if(value[i].country.cname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
      EmpArr.push(value[i]);
    }
    
    else if(status.toLowerCase().startsWith(searchTerm.toLowerCase())){
      EmpArr.push(value[i]);
    }
    else if(dept.toLowerCase().startsWith(searchTerm.toLowerCase())){
      EmpArr.push(value[i]);
    }
    
  }

  return (EmpArr);
  
  }

}
