import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
interface SideNavToggle{
  screenwidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

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
