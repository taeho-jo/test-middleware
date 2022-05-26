export const profileColor = [
  '#cfffac',
  '#95efe9',
  '#94bbf5',
  '#ba9dee',
  '#a8ff69',
  '#24e1d5',
  '#2878f0',
  '#7b3ce9',
  '#8bce5b',
  '#1db5ab',
  '#2262c1',
  '#6431bc',
  '#fe4e56',
];

// <-------------------- 구글 redirect URL 변수 --------------------> //
export const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;

// <-------------------- 이메일 인증 이메일 템플릿 변수 -------------------> //
export const EMAIL_CONFIRM_TEMPLATE =
  process.env.NODE_ENV === 'development' ? 'local_confirm_email_template' : process.env.NEXT_PUBLIC_CONFIRM_EMAIL_TEMPLATE;
// export const EMAIL_CONFIRM_TEMPLATE = 'stag_confirm_email_template';
// export const EMAIL_CONFIRM_TEMPLATE = 'prod_confirm_email_template'

// <-------------------- 비밀번호 재설정 이메일 템플릿 변수 --------------------> //
export const PASSWORD_RESET_TEMPLATE =
  process.env.NODE_ENV === 'development' ? 'local_password_reset_template' : process.env.NEXT_PUBLIC_PASSWORD_RESET_TEMPLATE;
// export const PASSWORD_RESET_TEMPLATE = 'stag_password_reset_template';
// export const PASSWORD_RESET_TEMPLATE = 'prod_password_reset_template'
