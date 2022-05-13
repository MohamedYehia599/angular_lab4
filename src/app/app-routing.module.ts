import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Department } from './_model/department';

const routes: Routes = [
  {path:"",component:HomeComponent},
   {path:'departments',loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule)},
  {path:'students',loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)},
  
  
 
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
