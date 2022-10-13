import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveappComponent } from '../faculty/components/leaveapp/leaveapp.component';
import { TimetableComponent } from '../faculty/components/timetable/timetable.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BatchAllocationComponent } from './components/batch-allocation/batch-allocation.component';
import { FeesComponent } from './components/fees/fees.component';
import { LeaveAppComponent } from './components/leave-app/leave-app.component';
import { StudentMarksComponent } from './components/student-marks/student-marks.component';
import { TimeTableComponent } from './components/time-table/time-table.component';

const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    children: [
      {
        path:'Fees',
        component:FeesComponent
      },
      {
        path:'LeaveApp',
        component:LeaveAppComponent
      },
      {
        path:'BatchAllocation',
        component:BatchAllocationComponent
      },
      {
        path:'StudentMarks',
        component:StudentMarksComponent
      },
      {
        path:'timetable',
        component:TimeTableComponent
      },
      {
        path:'',
        redirectTo:'/admin/Fees',
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
