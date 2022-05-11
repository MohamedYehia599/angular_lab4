import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_model/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(public dept_service:DepartmentService) { }
  departments:Department[]=[];
  ngOnInit(): void {
    
   this.departments =this.dept_service.list();
  }

}
