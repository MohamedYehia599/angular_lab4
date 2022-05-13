import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(public stud_service:StudentService ,public router:Router) { }
  stud_id:number=0;
  stud_name:string='';
  stud_email:string='';
  stud_dept_id:number=0;
  
  save(){
  this.stud_service.add(this.stud_id,this.stud_name,this.stud_email,this.stud_dept_id);
  this.router.navigateByUrl('students')
  }
  show(t:any){
    console.log(t);
    
  }


  ngOnInit(): void {
  }

}
