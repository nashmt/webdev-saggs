import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { PRODUCTS } from '../_helpers/index';

@Component({
  selector: 'app-bootstrap-request',
  templateUrl: './bootstrap-request.component.html',
  styleUrls: ['./bootstrap-request.component.css']
})
export class BootstrapRequestComponent implements OnInit {
  admComp = new AdminComponent;
  products = PRODUCTS;
  newView ='requests';
  constructor() { }

  ngOnInit() {
    this.admComp.view=this.newView;
  }

}
