import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid, Stack, Button, IconButton, Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from './Grid';
import { breakpoints } from '../Theme';
import MenuIcon from '@mui/icons-material/Menu';
import LogoWhite from '../assets/images/diby_white.png';
import LogoBlack from '../assets/images/diby_black.png';
import icon1 from '../assets/images/icon_uitest.png';
import icon2 from '../assets/images/icon_uxposition.png';
import icon3 from '../assets/images/icon_scenario.png';
import icon4 from '../assets/images/icon_customer.png';

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
  width: '130px',
  borderRadius: '45px',
  fontWeight: '700',
  textTransform: 'none',
});

function AppBar({ dark = false }: { dark?: boolean }) {
  const navigate = useRouter();
  const darkMode = dark ?? false;

  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [useCasesMenuAnchor, setUseCaseMenuAnchor] = useState<HTMLButtonElement | null>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<HTMLButtonElement | null>(null);
  const isUseCaseOpen = Boolean(useCasesMenuAnchor);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

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

  return (
    <GridContainer container style={{ margin: '0 auto', height: '68px' }}>
      <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '16px' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Link href="/">
            <img
              src={darkMode ? LogoWhite.src : LogoBlack.src}
              alt="diby"
              style={{
                width: '56px',
                height: '30px',
                objectFit: 'contain',
                padding: `${isMobile ? '10px' : '6px'} 0 0 0`,
              }}
            />
          </Link>

          {!isMobile && (
            <Stack className="hide-on-md" direction="row" justifyContent="center" alignItems="center" spacing={16} style={{ marginRight: '30px' }}>
              <AppBarButton color={darkMode ? 'white' : 'primary'} variant="text" onClick={handleClickUseCases}>
                Use cases
              </AppBarButton>
              <AppBarButton
                color={darkMode ? 'white' : 'primary'}
                variant="text"
                onClick={() => {
                  handleClick('/feature');
                }}
              >
                Feature
              </AppBarButton>
              <AppBarButton
                color={darkMode ? 'white' : 'primary'}
                variant="text"
                onClick={() => {
                  handleClick('/pricing');
                }}
              >
                Pricing
              </AppBarButton>
            </Stack>
          )}

          {!isMobile && (
            <DesignButton
              color={darkMode ? 'green' : 'white'}
              style={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5' }}
              onClick={() => {
                handleClick('/tri');
              }}
            >
              설계하기
            </DesignButton>
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
          <p style={{ margin: '0 0 10px 0', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>Solution</p>
          <div style={{ width: '280px', height: '60px', display: 'flex' }}>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/ui');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <img src={icon1.src} alt="diby" style={{ width: '24px', height: '24px', margin: 'auto 0' }} />
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UI 진단</p>
              </div>
            </Button>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/ux');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <img src={icon2.src} alt="diby" style={{ width: '24px', height: '24px', margin: 'auto 0' }} />
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UX 포지션 분석</p>
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
                <img src={icon3.src} alt="diby" style={{ width: '24px', height: '24px', margin: 'auto 0' }} />
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>시나리오 검증</p>
              </div>
            </Button>
            <Button
              style={{ flex: 1, padding: '0', margin: '0 auto 0 0', width: '110px', justifyContent: 'flex-start' }}
              onClick={() => {
                handleClick('/usecases/customer');
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <img src={icon4.src} alt="diby" style={{ width: '24px', height: '24px', margin: 'auto 0' }} />
                <p style={{ margin: '0 0 0 10px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>잠재 고객 조사</p>
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
            <p style={{ width: '100%', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', textAlign: 'left', margin: '0' }}>Feature</p>
          </Button>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
          <Button
            style={{ margin: '24px auto 24px -8px', width: '100%' }}
            onClick={() => {
              handleClick('/pricing');
            }}
          >
            <p style={{ width: '100%', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', textAlign: 'left', margin: '0' }}>Pricing</p>
          </Button>
          <div style={{ margin: '0 -24px', borderTop: '1px dashed #ccc', opacity: '0.3' }} />
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
                <img src={icon1.src} alt="diby" style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }} />
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UI 진단</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>사용성 개선 우선순위 선정</p>
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
                <img src={icon2.src} alt="diby" style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }} />
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>UX 포지션 분석</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>UX 전략 수립</p>
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
                <img src={icon3.src} alt="diby" style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }} />
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>시나리오 검증</p>
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
                <img src={icon4.src} alt="diby" style={{ width: '40px', height: '40px', margin: 'auto 0 auto 40px' }} />
                <div style={{ paddingLeft: '16px' }}>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>잠재 고객 조사</p>
                  <p style={{ margin: '0', textAlign: 'left', fontSize: '14px' }}>목표 고객군 선별</p>
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
