import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { PRODUCTS } from '../_helpers/index';

@Component({
  selector: 'app-bootstrap-request',
  templateUrl: './bootstrap-request.component.html',
  styleUrls: ['./bootstrap-request.component.css']
})
export class BootstrapRequestComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit() {

  }

}
