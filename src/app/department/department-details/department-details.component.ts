import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_model/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(public dept_service:DepartmentService,public ac:ActivatedRoute) { }
s:Subscription|null=null;

department:Department|null=new Department(0,'','');
  ngOnInit(): void {
   
    // this.department=this.dept_service.show_details(this.ac.snapshot.params['_id'])
    this.s=this.ac.params.subscribe(params=>{
      console.log(params);
      
      this.dept_service.show_details(params['id']).subscribe((data: Department | null)=>{
        this.department=data;
      })
    })
  }
  ngOnDestroy(){
    console.log('destroyed');
    
 this.s?.unsubscribe;
  }

}
