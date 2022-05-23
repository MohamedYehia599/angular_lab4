import { Injectable } from '@angular/core';
import { Department } from './_model/department';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public http:HttpClient) { }
     private departments:Department[]=[
    new Department(100,'OS','alex'),
    new Department(200,'PD','cairo'),
    new Department(300,'SA','smart village')
    
  ];
  private url:string = 'http://localhost:8080/departments/'
  list(){
    // return this.departments;
    // console.log(this.http.get<Department[]>(this.url));
    
    return this.http.get<Department[]>(this.url);
  }
  add(dept:Department){
    // this.departments.push(new Department(dept._id,dept.name,dept.location));
    return this.http.post<Department>(this.url,dept)
  };
  show_details(id:number):any{
  //   
  
  // for(let i=0;i<this.departments.length;i++)
  //     if(this.departments[i]._id==id) return this.departments[i];
      
  
  //   return null;
  // }
  // console.log(this.http.get<Department>(this.url+id));
  
return this.http.get<Department>(this.url+id)

  }
}
