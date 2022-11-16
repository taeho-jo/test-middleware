import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  // const dispatch = useDispatch();
  const {
    cookies,
    nextUrl: { searchParams },
  } = req;

  const accessToken = cookies.accessToken;
  const emailVerifiedYn = cookies.emailVerifiedYn;
  const firstTimeYn = cookies.firstTimeYn;
  const currentPath = req?.nextUrl?.pathname;
  const redirectUrl = req.nextUrl.clone();

  // 토큰이 있는 경우
  // dispatch(getCommonCode());
  if (accessToken) {
    // 이메일 인증이 안되어 있는 경우에는 /admin 접근 불가
    if (emailVerifiedYn === 'N') {
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }
    // 이메일 인증이 완료 된 유저
    if (emailVerifiedYn === 'Y') {
      return NextResponse.next();
    }
  }
  // 토큰이 없는 경우
  else {
    if (
      currentPath === '/admin/welcome' ||
      currentPath === '/admin/research/recommendation' ||
      currentPath === '/admin/report/share' ||
      searchParams.get('isShare') === 'true'
    ) {
      return NextResponse.next();
    } else {
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }
  }
}
