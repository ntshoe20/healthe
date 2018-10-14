import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  leadCount: number;
  groupCount: number;

  constructor(

  ) { }

  ngOnInit() {

  }

}
