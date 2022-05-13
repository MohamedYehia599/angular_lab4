import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_model/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(public dept_service:DepartmentService,public ac:ActivatedRoute) { }


department:Department|null=new Department(0,'','');
  ngOnInit(): void {
   
    this.department=this.dept_service.show_details(this.ac.snapshot.params['id'])
  }

}
