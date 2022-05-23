import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


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
