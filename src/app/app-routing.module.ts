import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department/department.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
 {path:'Employee', loadChildren: () => import("./employee/employee.module").then(x => x.EmployeeModule)},
 {path:'Department', loadChildren: () => import("./department/department.module").then(x => x.DepartmentModule)},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
