import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeDetailsComponent } from './components/fee-details/fee-details.component';
import { StuAssignmentComponent } from './components/stu-assignment/stu-assignment.component';
import { StuAttendanceComponent } from './components/stu-attendance/stu-attendance.component';
import { StuLeaveappComponent } from './components/stu-leaveapp/stu-leaveapp.component';
import { StuMaterialsComponent } from './components/stu-materials/stu-materials.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:StudentDashboardComponent,
    children: [
      {
        path:'attendance',
        component:StuAttendanceComponent
      },
      {
        path:'assignment',
        component:StuAssignmentComponent
      },
      {
        path:'materials',
        component:StuMaterialsComponent
      },
      {
        path:'leaveapp',
        component:StuLeaveappComponent
      },
      {
        path:'Fees-Details',
        component:FeeDetailsComponent
      },
      {
        path:'',
        redirectTo:'/student/attendance',
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
