import { Component, OnInit } from '@angular/core';

import { PENDING } from '../_helpers/index';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  pending = PENDING;

  constructor() { }

  ngOnInit() {
  }

}
