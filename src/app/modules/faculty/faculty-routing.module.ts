import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { FacVideosComponent } from './components/fac-videos/fac-videos.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { LeaveappComponent } from './components/leaveapp/leaveapp.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { PapersComponent } from './components/papers/papers.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { TimetableComponent } from './components/timetable/timetable.component';

const routes: Routes = [
  {
    path:'',
    component:FacultyDashboardComponent,
    children: [
      {
        path:'attendance',
        component:AttendanceComponent
      },
      {
        path:'assignment',
        component:AssignmentComponent
      },
      {
        path:'materials',
        component:MaterialsComponent
      },
      {
        path:'leaveapp',
        component:LeaveappComponent
      },
      {
        path:'timetable',
        component:TimetableComponent
      },
      {
        path:'presentation',
        component:PresentationsComponent
      },
      {
        path:'facultyvideos',
        component:FacVideosComponent
      },
      {
        path:'papers',
        component:PapersComponent
      },
      {
        path:'',
        redirectTo:'/faculty/attendance',
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
