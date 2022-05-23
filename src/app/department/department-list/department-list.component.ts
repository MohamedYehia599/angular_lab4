import { Component, OnInit,Input,OnChanges ,SimpleChanges,OnDestroy } from '@angular/core';
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
   
    
    // this.departments=this.dept_service.list();
   this.dept_service.list().subscribe(data=>{
     console.log(data);
     
     this.departments=data;
   });

  }
  show(){
    this.dept_service.list();
  }
  // ngOnChanges(changes:SimpleChanges){
  //   console.log(changes);
    
  //   this.dept_service.list().subscribe(data=>{
  //     this.departments=data;
  //   });
  // }
  // ngOnDestroy(){
  //   console.log('destroyed');
    
  // }

}
