export interface LoginInputType {
  userId: string;
  password: string;
}

export interface SignupInputType {
  userId: string;
  password: string;
  userName: string | null;
  funnelsCd: string | null;
  cpPosition: string | null;
  cpSize: string | null;
  cxResearch: string | null;
  purposeOfUse: string | null;
}
