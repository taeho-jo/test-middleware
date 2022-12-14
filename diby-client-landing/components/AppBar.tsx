import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../src/store/reducers/modalReducer';
// Components
import { Button, Grid, IconButton, Popover, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from './Grid';
import { breakpoints } from '../Theme';
// Images
import MenuIcon from '@mui/icons-material/Menu';
import icon1 from '../../public/assets/images/icon_uitest1.png';
import icon2 from '../../public/assets/images/icon_uxposition1.png';
import icon3 from '../../public/assets/images/icon_scenario1.png';
import icon4 from '../../public/assets/images/icon_customer1.png';
import { ReducerType } from '../../src/store/reducers';
import ChannelService from '../../src/common/util/channelTalk';
import { userReset } from '../../src/store/reducers/userReducer';
import { authReset } from '../../src/store/reducers/authReducer';
import { teamReset } from '../../src/store/reducers/teamReducer';
import { researchReset } from '../../src/store/reducers/researchCreateReducer';
import { updateQueryStatus } from '../../src/store/reducers/useQueryControlReducer';
import { Cookies } from 'react-cookie';
import { clearCookies } from '../../src/common/util/commonFunc';

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
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  // const token = localStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  const resetToken = sessionStorage.getItem('accessToken');
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

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
  const handleMoveAdmin = useCallback(
    (path: string) => {
      // if (token && userInfo?.emailVerifiedYn === 'Y') {
      if (accessToken && userInfo?.emailVerifiedYn === 'Y') {
        navigate.push(path);
      } else {
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
    },
    [accessToken, userInfo?.emailVerifiedYn],
  );

  const handleLogout = useCallback(async () => {
    const channelTalk = new ChannelService();
    channelTalk.shutdown();

    clearCookies();
    dispatch(userReset());
    dispatch(authReset());
    dispatch(teamReset());
    dispatch(researchReset());
    dispatch(updateQueryStatus({ name: 'userInfoQuery', status: false }));
    navigate.push('/');
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <GridContainer container style={{ margin: '0 auto', height: '68px', width: '100%', maxWidth: '1920px' }}>
      <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '16px' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Link href="/">
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
                ????????? ??????
              </AppBarButton>
              <AppBarButton
                color={darkMode ? 'white' : 'primary'}
                variant="text"
                onClick={() => {
                  handleClick('/feature');
                }}
              >
                ???????????????
              </AppBarButton>
              <AppBarButton
                color={darkMode ? 'white' : 'primary'}
                variant="text"
                onClick={() => {
                  handleClick('/pricing');
                }}
              >
                ????????????
              </AppBarButton>
            </Stack>
          )}

          {!isMobile && (
            <div>
              {accessToken && !userId ? (
                <>
                  <DesignButton style={{ color: darkMode ? 'white' : '#3c3c46' }} onClick={() => handleLogout()}>
                    ????????????
                  </DesignButton>
                  <DesignButton
                    color={darkMode ? 'green' : 'white'}
                    style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}
                    onClick={() => handleMoveAdmin('/admin/team')}
                  >
                    ????????????
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
                    ?????????
                  </DesignButton>
                  <DesignButton
                    color={darkMode ? 'green' : 'white'}
                    style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}
                    onClick={() => {
                      dispatch(isShow({ isShow: true, type: 'signup' }));
                    }}
                  >
                    ????????????
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
          <p style={{ margin: '0 0 10px 0', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>????????? ??????</p>
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
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>????????? ?????????</p>
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
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UX ????????? ??????</p>
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
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>???????????? ??????</p>
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
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>????????? ??????</p>
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
            <p style={{ width: '100%', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', textAlign: 'left', margin: '0' }}>???????????????</p>
          </Button>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
          <Button
            style={{ margin: '24px auto 24px -8px', width: '100%' }}
            onClick={() => {
              handleClick('/pricing');
            }}
          >
            <p style={{ width: '100%', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', textAlign: 'left', margin: '0' }}>????????????</p>
          </Button>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
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
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>????????? ?????????</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>????????? ????????? ??????</p>
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
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UX ????????? ??????</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>???????????? ?????? UX ?????? ??? ????????????</p>
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
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>???????????? ??????</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>?????? ?????? ??? ????????????</p>
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
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>????????? ??????</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>?????? ?????? ??????</p>
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
