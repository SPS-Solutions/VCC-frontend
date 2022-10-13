import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { BatchAllocationComponent } from './components/batch-allocation/batch-allocation.component';
import { FeesComponent } from './components/fees/fees.component';
import { StudentMarksComponent } from './components/student-marks/student-marks.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table' 
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    TimeTableComponent,
    BatchAllocationComponent,
    FeesComponent,
    StudentMarksComponent,
    SiderbarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ]
})
export class AdminModule { }
