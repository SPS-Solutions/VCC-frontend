import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { LeaveappComponent } from './components/leaveapp/leaveapp.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    FacultyDashboardComponent,
    SidebarComponent,
    AttendanceComponent,
    AssignmentComponent,
    MaterialsComponent,
    LeaveappComponent,
    TimetableComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ]
})
export class FacultyModule { }
