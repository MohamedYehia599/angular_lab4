import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public stud_service:StudentService) { }
    students:Student[]=[];
  ngOnInit(): void {
    this.stud_service.list().subscribe(data=>{
      this.students=data;
    });
    console.log(Request);
    
  }

   
}
