import { Component, OnInit } from '@angular/core';

import { ProcessTokenService } from '../_services/index';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-callback-buffer',
  templateUrl: './callback-buffer.component.html',
  styleUrls: ['./callback-buffer.component.css']
})
export class CallbackBufferComponent implements OnInit {


  // Note: just instantiating ProcessTokenService here retrieves the token and stores it in a cookie
  constructor(

    private processToken: ProcessTokenService
  ) { }


  ngOnInit() {

    var the_url: string = window.location.href;

    the_url = the_url.replace("callback-buffer", "create-lead");

    window.location.href = the_url;
  }

}
