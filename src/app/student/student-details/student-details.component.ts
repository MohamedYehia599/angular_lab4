import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public stud_service:StudentService,public ac:ActivatedRoute) { }
student:Student|null= new Student(0,'','',0);
  ngOnInit(): void {
   this.student= this.stud_service.show_details(this.ac.snapshot.params['id'])
  }

}
