import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  requested_product: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {

    this.requested_product = this.route.snapshot.queryParamMap.get('requested_product');
  }

}
