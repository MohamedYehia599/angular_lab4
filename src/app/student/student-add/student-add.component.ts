import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(public stud_service:StudentService ,public router:Router) { }
 stud:Student = new Student(0,'',0);
  
  save(){
  // this.stud_service.add(this.stud_id,this.stud_name,this.stud_email,this.stud_dept_id);
      this.stud_service.add(this.stud).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl('students')
      })
  
  }
  // show(t:any){
  //   console.log(t);
    
  // }


  ngOnInit(): void {
  }

}
