export interface StartPageComponentInput {
	message: string;
	showMessage: boolean;
	credits: any,
	creditsLabel: string;
	showCredits: boolean;
	poweredByLabel: string;
	poweredByImageURL: string;
	showPoweredBy: boolean;
	licenseTerms: string,
	licenseTermsLabel: string,
	showlicenseTerms: boolean,
	copyright: string,
	copyrightLabel: string,
	showCopyRight: boolean,
	}
export type startEventType = 'START' | 'END' | 'INTERACT' | 'FAILED' | 'IMPRESSION';