import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
interface SideNavToggle{
  screenwidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(public header:HeaderService) { }

  ngOnInit(): void {
    this.header.hide();
  }
  isSideNavCollapsed=false;
  scrrenwidth=0;
  onToggleSideNav(data: SideNavToggle){
    this.scrrenwidth=data.screenwidth;
    this.isSideNavCollapsed=data.collapsed;
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
