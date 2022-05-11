export interface LoginInputType {
  userId: string;
  password: string;
}

export interface SignupInputType {
  userId: string;
  password: string;
  username: string;
  privacyConsentYn: string;
  consentToUseMarketingYn: string;
}
