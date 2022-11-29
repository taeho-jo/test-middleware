export const profileColor2 = ['#24e1d5', '#a8ff69', '#2878f0', '#7b3ce9', '#ff6678', '#ff9466', '#ffe81b', '#23ff88', '#e16bff', '#ff66b9'];
export const profileColor = '#1890ff';

export const RULES_SERVICE_DATE_OPTION = [
  { value: '20220705', displayName: '2022.07.05' },
  { value: '20220715', displayName: '2022.07.15' },
];

export const POLICY_PRIVACY_DATE_OPTION = [
  { value: '20220705', displayName: '2022.07.05' },
  { value: '20220731', displayName: '2022.07.31' },
];

// <-------------------- 구글 redirect URL 변수 --------------------> //
export const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;

// <-------------------- 이메일 인증 이메일 템플릿 변수 -------------------> //
export const EMAIL_CONFIRM_TEMPLATE =
  process.env.NODE_ENV === 'development' ? 'local_confirm_email_template' : process.env.NEXT_PUBLIC_CONFIRM_EMAIL_TEMPLATE;
// 'local_confirm_email_template';

// <-------------------- 비밀번호 재설정 이메일 템플릿 변수 --------------------> //
export const PASSWORD_RESET_TEMPLATE =
  process.env.NODE_ENV === 'development' ? 'local_password_reset_template' : process.env.NEXT_PUBLIC_PASSWORD_RESET_TEMPLATE;

// <-------------------- 팀원 초대 이메일 템플릿 변수 --------------------> //
export const INVITE_EMAIL_TEMPLATE =
  process.env.NODE_ENV === 'development' ? 'local_invite_email_template' : process.env.NEXT_PUBLIC_INVITE_EMAIL_TEMPLATE;

// <-------------------- 초대 팀원 인증 이메일 템플릿 변수 --------------------> //
export const INVITE_CONFIRM_EMAIL_TEMPLATE =
  process.env.NODE_ENV === 'development' ? 'local_invite_confirm_email_template' : process.env.NEXT_PUBLIC_INVITE_CONFIRM_EMAIL_TEMPLATE;

// <-------------------- 쿠키 유효기간 --------------------> //
export const expirationPeriod = 24 * 60 * 60 * 9;
