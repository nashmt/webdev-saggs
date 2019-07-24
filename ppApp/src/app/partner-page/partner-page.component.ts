import { Component, OnInit } from '@angular/core';

import { ISHTTPService } from '../_services/ishttp.service';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  private partners: any[];

  constructor(private http: ISHTTPService) { }

  ngOnInit() {

    this.http.get_partners().subscribe(

      (data) => {

        console.log(data);
        // this.partners = data;
      }
    )
  }

}
