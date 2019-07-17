import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { PENDING } from '../_helpers/index';

@Component({
  selector: 'app-admin-requested-products',
  templateUrl: './admin-requested-products.component.html',
  styleUrls: ['./admin-requested-products.component.css']
})
export class AdminRequestedProductsComponent implements OnInit {

  pending = PENDING;
  admComp = new AdminComponent;
  newView ='requests';
  constructor() { }

  ngOnInit() {
    this.admComp.view=this.newView;
  }
}
