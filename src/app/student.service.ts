import { Injectable } from '@angular/core';
import { Student } from './_model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
    private students:Student[]=[
    new Student(1,'ahmed',100),
    new Student(2,'mohamed',200),
    new Student(3,'wagdy',100)
  ];
  list(){
    return this.students;
  }
  add(id:number,name:string,dept_id:number){
    this.students.push(new Student(id,name,dept_id));
  }
}
