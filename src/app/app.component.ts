import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public startPageDetails: object;

  ngOnInit() {
    this.startPageDetails = {
      message: 'thermodynamics',
      showMessage: true,
      credits: ['HC Verma','RS Aggarwal'],
      creditsLabel: 'credits',
      showCredits: true,
      poweredByLabel: 'powered by',
      poweredByImageURL: 'https://diksha.gov.in/assets/imgs/logos.svg',
      showPoweredBy: true,
      licenseTerms: 'CC BY 4.0',
      licenseTermsLabel: 'license Terms',
      showlicenseTerms: true,
      copyright: 'CBSE, 2020',
      copyrightLabel: 'copyright',
      showCopyRight: true,
    }
  }
  public startPageEventHandler(valueEmitted) {
      console.log(valueEmitted);
    }
}
