import { NextResponse } from 'next/server';
export const DOMAIN = 'http://localhost:3000';

export const DOMAIN_ARR = [
  `${DOMAIN}/`,
  `${DOMAIN}/graph`,
  `${DOMAIN}/form`,
  `${DOMAIN}/note`,
  `${DOMAIN}/note/counter`,
];

export default function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.token;

  const url = req.url;

  if (DOMAIN_ARR.includes(url)) {
    if (jwt === undefined) {
      return NextResponse.redirect('/login');
    }

    try {
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect('/login');
    }
  }

  if (url.includes('/login')) {
    if (jwt) {
      try {
        return NextResponse.redirect('/');
      } catch (e) {
        return NextResponse.next();
      }
    }
  }

  return NextResponse.next();
}
