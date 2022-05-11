import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  constructor(public dept_service:DepartmentService) { }
  dept_id:number=0;
  dept_name:string='';
  dept_location:string='';

  
save (){
  this.dept_service.add(this.dept_id,this.dept_name,this.dept_location);

}

ngOnInit(): void {
  }

}
