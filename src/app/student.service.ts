import { Injectable } from '@angular/core';
import { Student } from './_model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
    private students:Student[]=[
    new Student(1,'ahmed','ahmed@gmail.com',100),
    new Student(2,'mohamed','mohamed@gmail.com',200),
    new Student(3,'wagdy','wagdy@gmail.com',100)
  ];
  list(){
    return this.students;
  }
  add(id:number,name:string,email:string,dept_id:number){
    this.students.push(new Student(id,name,email,dept_id));
    
  }
   show_details(id:number){
    for(let i=0;i<this.students.length;i++)
  if(this.students[i].id==id) return this.students[i];
      
  
  return null;
   }
}
