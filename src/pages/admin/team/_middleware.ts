import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const {
    cookies,
    nextUrl: { searchParams },
  } = req;
  const redirectUrl = req.nextUrl.clone();

  const recommendResearchType = cookies.recommendResearchType;

  if (recommendResearchType) {
    redirectUrl.pathname = '/admin/research/create';
    return NextResponse.redirect(redirectUrl);
  } else {
    return NextResponse.next();
  }
}
