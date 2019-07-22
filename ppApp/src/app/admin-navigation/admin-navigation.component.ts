import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {
  opened: boolean;
  view: string;
  adminView: string;

  ngOnInit() {
    this.opened=true;
    this.view='partners';
    this.adminView='partners';
  }

  setRequestView() {
    this.view='requests';
    this.adminView='requests';
  }
}
