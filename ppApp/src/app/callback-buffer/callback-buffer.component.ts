import { Component, OnInit } from '@angular/core';

import { ProcessTokenService } from '../_services/index';

@Component({
  selector: 'app-callback-buffer',
  templateUrl: './callback-buffer.component.html',
  styleUrls: ['./callback-buffer.component.css']
})
export class CallbackBufferComponent implements OnInit {


  // Note: just declaring ProcessTokenService here runs the "get_tokens()" method
  constructor(

    private processToken: ProcessTokenService
  ) { }


  ngOnInit() {

    var the_url: string = window.location.href;

    the_url = the_url.replace("callback", "callback-buffer");

    window.location.href = the_url;
  }

}
