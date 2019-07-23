import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ISHTTPService implements OnInit {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) { }


  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.append("Authorization", "Basic " +  btoa("Administrator:manage"));
    this.headers.append('Content-Type', 'application/json');
  }

  get_products(): any {

    return this.http.get("http://PartnerPortal:5555/restv2/PartnerPortalSF.RESTSvc:getProductsRS/getProducts");
  }

  get_leads(): any {

    return this.http.get("http://PartnerPortal:5555/restv2/SFDev.sfrest:getSFLeads/getLeads", {headers: this.headers})
  }

  post_lead(the_lead: any): any {

    return this.http.post("http://PartnerPortal:5555/restv2/SFDev.sfrest:createLeadRS/createLeadRS", the_lead, {headers: this.headers});
  }

}
