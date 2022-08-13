import { Component, OnInit } from '@angular/core';
declare var window:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }
  title = 'VCC-frontend';
}
