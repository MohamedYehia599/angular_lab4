import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(public stud_service:StudentService) { }
  stud_id:number=0;
  stud_name:string='';
  stud_dept_id:number=0;
  save(){
  this.stud_service.add(this.stud_id,this.stud_name,this.stud_dept_id);
  }
  ngOnInit(): void {
  }

}
