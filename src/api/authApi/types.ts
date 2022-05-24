export interface LoginInputType {
  userId: string;
  password: string;
}

export interface SignupInputType {
  userId: string;
  password: string;
  userName: string;
  privacyConsentYn: string;
  consentToUseMarketingYn: string;
  emailTemplateName: string;
}

export interface ResetPasswordType {
  userId: string;
  emailTemplateName: string;
}
export interface ChangePasswordType {
  password: string;
}
