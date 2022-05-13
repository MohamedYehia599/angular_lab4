import { Injectable } from '@angular/core';
import { Department } from './_model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
     private departments:Department[]=[
    new Department(100,'OS','alex'),
    new Department(200,'PD','cairo'),
    new Department(300,'SA','smart village')
  ];
  list(){
    return this.departments;
  }
  add(id:number,name:string,loc:string){
    this.departments.push(new Department(id,name,loc));
  };
  show_details(id:number):any{
    for(let i=0;i<this.departments.length;i++)
      if(this.departments[i].id==id) return this.departments[i];
      
  
    return null;
  }

}
