import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RouterModule,Routes } from '@angular/router';

let routes:Routes=[
  {path:"",component:StudentListComponent,
  children:[
    {path:"add",component:StudentAddComponent},
    {path:":id/details",component:StudentDetailsComponent},
  ] 

},
]


@NgModule({
  declarations: [
 
  
    StudentListComponent,
         StudentAddComponent,
         StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports: [StudentListComponent,
    StudentAddComponent]
})
export class StudentModule { }
