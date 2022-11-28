import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const permissionDomain = [
  '/admin/welcome',
  '/admin/research/recommendation',
  '/admin/research/recommendation/result',
  '/admin/report/share',
  '/admin/reset-password',
  '/admin/reset-password-success',
];

export default function middleware(req: NextRequest) {
  // const dispatch = useDispatch();
  const {
    cookies,
    nextUrl: { searchParams },
  } = req;

  const accessToken = cookies.accessToken;
  const emailVerifiedYn = cookies.emailVerifiedYn;
  const resetPasswordToken = cookies.resetPasswordToken;
  const firstTimeYn = cookies.firstTimeYn;
  const currentPath = req?.nextUrl?.pathname;
  const redirectUrl = req.nextUrl.clone();

  // 토큰이 있는 경우
  if (accessToken) {
    // 이메일 인증이 안되어 있는 경우에는 /admin 접근 불가
    if (emailVerifiedYn === 'N') {
      if (permissionDomain.includes(currentPath) || searchParams.get('isShare') === 'true') {
        return NextResponse.next();
      } else {
        redirectUrl.pathname = '/';
        return NextResponse.redirect(redirectUrl);
      }
    }
    // 이메일 인증이 완료 된 유저
    if (emailVerifiedYn === 'Y') {
      return NextResponse.next();
    }
  }
  // 토큰이 없는 경우
  else {
    if (permissionDomain.includes(currentPath) || searchParams.get('isShare') === 'true') {
      console.log(currentPath, 'currentPath');
      return NextResponse.next();
    } else {
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }
  }
}
