import { Component, OnInit } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public view = '';
  public layout = AdminLayoutComponent;
  constructor() { 
    this.view = 'partners';
  }

  ngOnInit() {
  }

  setView(newView) {
    this.view=newView;
  }
}
