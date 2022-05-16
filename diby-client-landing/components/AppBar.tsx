import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../src/store/reducers/modalReducer';
// Components
import { Grid, Stack, Button, IconButton, Popover, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from './Grid';
import { breakpoints, theme } from '../Theme';
// Images
import MenuIcon from '@mui/icons-material/Menu';
import LogoWhite from '../../public/assets/images/diby_white1.png';
import LogoBlack from '../../public/assets/images/diby_black1.png';
import icon1 from '../../public/assets/images/icon_uitest1.png';
import icon2 from '../../public/assets/images/icon_uxposition1.png';
import icon3 from '../../public/assets/images/icon_scenario1.png';
import icon4 from '../../public/assets/images/icon_customer1.png';

const AppBarButton = styled(Button)({
  fontWeight: '700',
  textTransform: 'none',
});

const AppBarIconButton = styled(IconButton)({
  width: '48px',
  borderRadius: '45px',
  fontWeight: '700',
  textTransform: 'none',
});

const DesignButton = styled(Button)({
  // width: '130px',
  borderRadius: '45px',
  fontWeight: '700',
  textTransform: 'none',
  boxSizing: 'border-box',
  padding: '4.5px 36px',
});

function AppBar({ dark = false }: { dark?: boolean }) {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const darkMode = dark ?? false;

  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [useCasesMenuAnchor, setUseCaseMenuAnchor] = useState<HTMLButtonElement | null>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<HTMLButtonElement | null>(null);
  const isUseCaseOpen = Boolean(useCasesMenuAnchor);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);
  const token = localStorage.getItem('accessToken');

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  const handleClickUseCases = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUseCaseMenuAnchor(event.currentTarget);
  };

  const handleCloseUseCasesMenu = () => {
    setUseCaseMenuAnchor(null);
  };

  const handleClickMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const handleClick = (path: string) => {
    navigate.push(path);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(navigate, 'N');

  return (
    <GridContainer container style={{ margin: '0 auto', height: '68px', width: '100%', maxWidth: '1920px' }}>
      <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '16px' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Link href="/index">
            <div
              style={{
                cursor: 'pointer',
                padding: `${isMobile ? '10px' : '6px'} 0 0 0`,
              }}
            >
              <img
                src={
                  darkMode
                    ? 'https://diby-storage.s3.ap-northeast-2.amazonaws.com/static/images/diby_white1.png'
                    : 'https://diby-storage.s3.ap-northeast-2.amazonaws.com/static/images/diby_black1.png'
                }
                alt={'Logo'}
                style={{ width: '56px', height: '30px' }}
              />
            </div>
          </Link>

          {!isMobile && (
            <Stack className="hide-on-md" direction="row" justifyContent="center" alignItems="center" spacing={16} style={{ marginRight: '30px' }}>
              <AppBarButton color={darkMode ? 'white' : 'primary'} variant="text" onClick={handleClickUseCases}>
                테스트 종류
              </AppBarButton>
              <AppBarButton
                color={darkMode ? 'white' : 'primary'}
                variant="text"
                onClick={() => {
                  handleClick('/feature');
                }}
              >
                솔루션소개
              </AppBarButton>
              <AppBarButton
                color={darkMode ? 'white' : 'primary'}
                variant="text"
                onClick={() => {
                  handleClick('/pricing');
                }}
              >
                가격안내
              </AppBarButton>
            </Stack>
          )}

          {!isMobile && (
            <div>
              {token ? (
                <>
                  <DesignButton
                    style={{ color: darkMode ? 'white' : '#3c3c46' }}
                    onClick={() => {
                      localStorage.clear();
                      navigate.push(navigate.asPath);
                    }}
                  >
                    로그아웃
                  </DesignButton>
                  <DesignButton
                    color={darkMode ? 'green' : 'white'}
                    style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}
                    onClick={() => {
                      navigate.push('/admin/team');
                    }}
                  >
                    대시보드
                  </DesignButton>
                </>
              ) : (
                <>
                  <DesignButton
                    style={{ color: darkMode ? 'white' : '#3c3c46' }}
                    onClick={() => {
                      dispatch(isShow({ isShow: true, type: 'login' }));
                    }}
                  >
                    로그인
                  </DesignButton>
                  <DesignButton
                    color={darkMode ? 'green' : 'white'}
                    style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}
                    onClick={() => {
                      dispatch(isShow({ isShow: true, type: 'signup' }));
                    }}
                  >
                    회원가입
                  </DesignButton>
                </>
              )}
            </div>
          )}

          {isMobile && (
            <div>
              <AppBarIconButton
                color="white"
                aria-label="menu"
                size="small"
                onClick={handleClickMobileMenu}
                style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}
              >
                <MenuIcon fontSize="inherit" />
              </AppBarIconButton>
            </div>
          )}
        </Stack>
      </Grid>
      <Popover
        id="main-menu"
        anchorEl={mobileMenuAnchor}
        open={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: -10,
          horizontal: 'right',
        }}
      >
        <div style={{ padding: '32px 24px' }}>
          <p style={{ margin: '0 0 10px 0', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>테스트 종류</p>
          <div style={{ width: '280px', height: '60px', display: 'flex' }}>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/ui');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '24px', height: '24px', margin: 'auto 0' }}>
                  <Image src={icon1} alt={'diby1'} width={24} height={24} priority={true} quality={100} />
                </div>
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UI 진단 테스트</p>
              </div>
            </Button>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/ux');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '24px', height: '24px', margin: 'auto 0' }}>
                  <Image src={icon2} alt={'diby2'} width={24} height={24} priority={true} quality={100} />
                </div>
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UX 포지션 테스트</p>
              </div>
            </Button>
          </div>
          <div style={{ width: '280px', height: '60px', display: 'flex' }}>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/scenario');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '24px', height: '24px', margin: 'auto 0' }}>
                  <Image src={icon3} alt={'diby3'} width={24} height={24} priority={true} quality={100} />
                </div>
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>시나리오 테스트</p>
              </div>
            </Button>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/customer');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '24px', height: '24px', margin: 'auto 0' }}>
                  <Image src={icon4} alt={'diby4'} width={24} height={24} priority={true} quality={100} />
                </div>
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>퍼소나 테스트</p>
              </div>
            </Button>
          </div>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
          <Button
            style={{ margin: '24px auto 24px -8px', width: '100%' }}
            onClick={() => {
              handleClick('/feature');
            }}
          >
            <p style={{ width: '100%', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', textAlign: 'left', margin: '0' }}>솔루션소개</p>
          </Button>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
          <Button
            style={{ margin: '24px auto 24px -8px', width: '100%' }}
            onClick={() => {
              handleClick('/pricing');
            }}
          >
            <p style={{ width: '100%', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', textAlign: 'left', margin: '0' }}>가격안내</p>
          </Button>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
          {/*<div>*/}
          {/*  <DesignButton*/}
          {/*    style={{ color: darkMode ? 'white' : '#3c3c46' }}*/}
          {/*    onClick={() => {*/}
          {/*      dispatch(isShow({ isShow: true, type: 'login' }));*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    로그인*/}
          {/*  </DesignButton>*/}
          {/*  <DesignButton*/}
          {/*    color={darkMode ? 'green' : 'white'}*/}
          {/*    style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}*/}
          {/*    onClick={() => {*/}
          {/*      dispatch(isShow({ isShow: true, type: 'signup' }));*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    회원가입*/}
          {/*  </DesignButton>*/}
          {/*</div>*/}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '18px' }}>
            <DesignButton
              color={'white'}
              style={{ backgroundColor: '#24E1D5' }}
              onClick={() => {
                handleClick('/tri');
              }}
            >
              설계하기
            </DesignButton>
          </div>
        </div>
      </Popover>
      <Popover
        id="use-case-menu"
        anchorEl={useCasesMenuAnchor}
        open={isUseCaseOpen}
        onClose={handleCloseUseCasesMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: -100,
        }}
        transformOrigin={{
          vertical: -10,
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '16px 16px' }}>
          <div style={{ width: '650px', height: '100px', display: 'flex' }}>
            <Button
              style={{ padding: '0', margin: '0 auto 0 0', flex: 1, width: '170px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/ui');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }}>
                  <Image src={icon1} alt={'icon1'} width={40} height={40} priority={true} quality={100} />
                  {/*<img src={icon1.src} alt={'diby1'} style={{ width: '40px', height: '40px' }} />*/}
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UI 진단 테스트</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>사용성 문제점 파악</p>
                </div>
              </div>
            </Button>
            <Button
              style={{ padding: '0', margin: '0 auto 0 0', flex: 1, width: '170px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/ux');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }}>
                  <Image src={icon2} alt={'icon2'} width={40} height={40} priority={true} quality={100} />
                  {/*<img src={icon2.src} alt={'diby2'} style={{ width: '40px', height: '40px' }} />*/}
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UX 포지션 테스트</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>실사용자 대상 UX 평가 및 전략수립</p>
                </div>
              </div>
            </Button>
          </div>
          <div style={{ width: '650px', height: '100px', display: 'flex' }}>
            <Button
              style={{ padding: '0', margin: '0 auto 0 0', flex: 1, width: '170px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/scenario');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }}>
                  <Image src={icon3} alt={'icon3'} width={40} height={40} priority={true} quality={100} />
                  {/*<img src={icon3.src} alt={'diby3'} style={{ width: '40px', height: '40px' }} />*/}
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>시나리오 테스트</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>가설 검정 및 의사결정</p>
                </div>
              </div>
            </Button>
            <Button
              style={{ padding: '0', margin: '0 auto 0 0', flex: 1, width: '170px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/customer');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }}>
                  <Image src={icon4} alt={'icon4'} width={40} height={40} priority={true} quality={100} />
                  {/*<img src={icon4.src} alt={'diby4'} style={{ width: '40px', height: '40px' }} />*/}
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>퍼소나 테스트</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>핵심 고객 정의</p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </Popover>
    </GridContainer>
  );
}

export default AppBar;
