import { Injectable } from '@angular/core';
import { Student } from './_model/student';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }
    private students:Student[]=[
    new Student(1,'ahmed',100),
    new Student(2,'mohamed',200),
    new Student(3,'wagdy',100)
  ];
  private url:string='http://localhost/students/';
  list(){
    return this.http.get<Student[]>(this.url);
  }
  add(stud:Student){
   return this.http.post<Student>(this.url,stud);
  //  this.students.push(new Student(stud._id,stud.name,stud.department));
    
  }
   show_details(id:number){
  //   for(let i=0;i<this.students.length;i++)
  // if(this.students[i].id==id) return this.students[i];
      
  
  // return null;
  return this.http.get<Student>(this.url+id);
  //  }
}
}
