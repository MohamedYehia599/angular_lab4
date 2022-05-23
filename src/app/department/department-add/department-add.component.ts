import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_model/department';
import { DepartmentListComponent } from '../department-list/department-list.component';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  constructor(public dept_service:DepartmentService,public router:Router) { }
  
  department:Department=new Department(0,'','');

  
save (){
  // this.dept_service.add(this.department);
  this.dept_service.add(this.department).subscribe(a=>{
    console.log(a);
    
    
    this.router.navigate(['/departments']);
    
  });
  

}

ngOnInit(): void {
  }

}
