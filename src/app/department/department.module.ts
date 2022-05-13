import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
   {path:"",component:DepartmentListComponent,
children:[
  {path:"add",component:DepartmentAddComponent},
  {path:":id/details",component:DepartmentDetailsComponent},
]


},]

@NgModule({
  declarations: [
  
  
    DepartmentListComponent,
          DepartmentAddComponent,
          DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports:[DepartmentListComponent,
    DepartmentAddComponent]
})
export class DepartmentModule { }
