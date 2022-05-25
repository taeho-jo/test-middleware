import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withTokenAuth(SpecificComponent: any, option: boolean) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
    const token = localStorage.getItem('accessToken');
    const test = true;
    const resetToken = sessionStorage.getItem('accessToken');
    // option
    // true : 권한 상관없이 접근가능
    // false : 로그인한 유저만 접근가능
    const removeSesstionStorage = () => {
      sessionStorage.clear();
      router.replace('/');
    };
    {
      /*
      SessionStorage에 토큰을 저장한 경우 ( 비밀번호 재설정의 경우 )
        세션스토리지 비우고 '/'로 이동

      로그인한 유저만 접근 가능한 페이지
        토큰이 있는 경우
          이메일 인증 완료
              최초 로그인      ===> 프로필 설정
              최초 로그인 아님  ===> 어드민 페이지
          이메일 인증 미완료     ===> 랜딩 페이지
        토큰이 없는 경우         ===> 랜딩 페이지
        토큰이 없고 세션에만 있다  ===> 비밀번호 찾기 페이지

      Root URL ( / ) 로 접근한 경우
        토큰이 있는 경우
          이메일 인증 완료
              최초 로그인      ===> 프로필 설정
              최초 로그인 아님  ===> 어드민 페이지
          이메일 인증 미완료  ===> 랜딩 페이지
        토큰이 없는 경우 ===> 그대로 있으면 됌
        토큰이 없고 세션에만 있다 ===>
    */
    }
    useEffect(() => {
      if (!option) {
        if (token) {
          if (userInfo.emailVerifiedYn === 'Y') {
            if (userInfo.firstTimeYn === 'Y') {
              router.replace('/admin/profile');
            }
          }
          if (userInfo.emailVerifiedYn !== 'Y') {
            return;
          }
        }

        if (!token) {
          if (resetToken) {
            router.replace('/admin/reset-password');
          } else {
            removeSesstionStorage();
          }
        }
      }
      if (option) {
        if (resetToken) {
          router.replace('/admin/reset-password');
        }
      }
      if (router.pathname === '/') {
        if (token) {
          if (userInfo.emailVerifiedYn === 'Y') {
            if (userInfo.firstTimeYn === 'Y') {
              console.log('이거 왜 안타??');
              router.replace('/admin/profile');
            } else {
              router.replace('/admin/team');
            }
          }
        }
        if (!token) {
          router.replace('/');
        }
      }

      // if (resetToken) {
      //   removeSesstionStorage();
      // }
      // if (!option && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'Y') {
      //   router.replace('/admin/profile')z;
      // }
      // if (!option && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'N') {
      //   router.replace('/admin/team');
      // }
      // if ((!option && !token) || userInfo.emailVerifiedYn === 'N') {
      //   router.replace('/main');
      // }
      // if (!option && token && userInfo.emailVerifiedYn === 'Y') {
      //   return;
      // }
      // if (!option && token && userInfo.emailVerifiedYn !== 'Y') {
      //   router.replace('/main');
      // }
      // if (option && token && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'Y') {
      //   router.replace('/main');
      // }
      // if (router.pathname === '/') {
      //   if (option && token && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'Y') {
      //     router.replace('/admin/profile');
      //   }
      //   if (option && token && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'N') {
      //     router.replace('/admin/team');
      //   }
      // }
    }, [token, userInfo]);

    return <SpecificComponent />;
  };
  return AuthenticateCheck;
}
