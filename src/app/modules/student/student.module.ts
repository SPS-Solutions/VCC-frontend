import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { FeeDetailsComponent } from './components/fee-details/fee-details.component';
import { StuMaterialsComponent } from './components/stu-materials/stu-materials.component';
import { StuAssignmentComponent } from './components/stu-assignment/stu-assignment.component';
import { StuAttendanceComponent } from './components/stu-attendance/stu-attendance.component';
import { StuLeaveappComponent } from './components/stu-leaveapp/stu-leaveapp.component';
import { SidebarrComponent } from './components/sidebarr/sidebarr.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    FeeDetailsComponent,
    StuMaterialsComponent,
    StuAssignmentComponent,
    StuAttendanceComponent,
    StuLeaveappComponent,
    SidebarrComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ]
})
export class StudentModule { }
