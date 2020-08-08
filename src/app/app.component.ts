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
      creditsText: 'credits',
      showCredits: true,
      siteImage: 'https://diksha.gov.in/assets/imgs/logos.svg',
      showSiteImage: true,
      licenseTerms: 'CC BY 4.0',
      license: 'license',
      licenseTermsText: 'license Terms',
      showlicenseTerms: true,
      copyright: 'CBSE, 2020',
      copyrightText: 'copyright',
      showCopyRight: true,
      startButtonText : 'start',
      showStartButton : true
    }
  }
}
