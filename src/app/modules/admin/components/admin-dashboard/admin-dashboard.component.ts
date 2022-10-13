import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
interface SideNavToggle{
  screenwidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
