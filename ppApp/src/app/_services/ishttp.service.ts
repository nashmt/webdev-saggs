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

  // mySQL API's

  get_products(): any {

    return this.http.get("http://PartnerPortal:5555/restv2/PartnerPortalSF.RESTSvc:getProductsRS/getProducts");
  }

  get_partners() {

    return this.http.get("http://PartnerPortal:5555/restv2/PartnerPortalSF.RESTSvc:Partner/getAllPartners");
  }

  /**
   * 
   * @param the_partner partner-object - see "ishttp.service.ts" for example input.
   * 
   * {
        "PartnerId": "3",
        "PartnerTypeId": "1",
        "PartnerName": "Microsoft",
        "PartnerAddress1": "15010 NE 36th St.",
        "PartnerAddress2": null,
        "PartnerCity": "Redmond",
        "PartnerState": "WA",
        "PartnerZip": "98052",
        "ConnectedAgencies": null,
        "LeadId": null,
        "OtherTechnologyExperience": null,
        "OtherTechnnologyPartnership": null
      }

   */
  create_partner(the_partner: any) {

    return this.http.post("http://PartnerPortal:5555/restv2/PartnerPortalSF.RESTSvc:Partner/createPartner", the_partner);
  }

  // Salesforce API's

  get_leads(): any {

    return this.http.get("http://PartnerPortal:5555/restv2/SFDev.sfrest:getSFLeads/getLeads", {headers: this.headers})
  }


  /**
   * 
   * @param the_lead 
   */
  post_lead(the_lead: any): any {

    return this.http.post("http://PartnerPortal:5555/restv2/SFDev.sfrest:createLeadRS/createLeadRS", the_lead, {headers: this.headers});
  }

  
}
