import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GridContainer } from './Grid';
import LogoBlack from '../../public/assets/images/diby_black.png';
import LogoWhite from '../../public/assets/images/diby_white.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { breakpoints } from '../Theme';

const FooterButton = styled(Button)(({ theme }) => ({
  padding: '0px',
  fontSize: '14px',
  fontWeight: 'bold',
  justifyContent: 'flex-start',
  textTransform: 'none',
}));

function Footer(props: { dark?: boolean; style?: React.CSSProperties }) {
  const darkMode = props.dark ?? false;
  const ImgLogo = darkMode ? LogoWhite : LogoBlack;
  const color = darkMode ? 'white' : '#3C3C46';

  const navigate = useRouter();

  const handleClick = (path: string) => {
    navigate.push(path);
  };

  const [isTablet, setIsTablet] = useState(window.innerWidth < breakpoints.lg);
  const style = props.style ?? {};

  const handleResize = () => {
    setIsTablet(window.innerWidth < breakpoints.lg);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ width: '100%', background: navigate.pathname === '/' ? 'none' : darkMode ? '#3C3C46' : '#F8F8F8', boxSizing: 'border-box' }}>
        <GridContainer
          container
          style={Object.assign(
            {},
            { maxWidth: '1920px', margin: '0 auto', paddingTop: '88px', paddingBottom: '88px', background: darkMode ? '#3C3C46' : '#F8F8F8' },
            style,
          )}
        >
          <Grid item xs={12} md={6} lg={5}>
            <img src={ImgLogo.src} alt="diby" style={{ width: '56px', height: '24px', padding: '6px 0px' }} />
            <p style={{ fontSize: '14px', margin: '24px 0', lineHeight: '20px', color: color }}>
              사용자 피드백이 필요한
              <br />
              기획자, 디자이너, 마케터, 리서처를 위한
              <br />
              유저리서치 솔루션입니다.
            </p>
            <p style={{ fontSize: '12px', color: color }}>Ⓒ DBDLAB Corp.</p>
            <FooterButton
              color={darkMode ? 'white' : 'primary'}
              style={{ fontSize: '14px', fontWeight: 'bold' }}
              onClick={() => {
                handleClick('/rules/service/20220705');
              }}
            >
              이용 약관
            </FooterButton>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#3c3c46', marginRight: '10px' }}>및</span>
            <FooterButton
              color={darkMode ? 'white' : 'primary'}
              style={{ fontSize: '14px', fontWeight: 'bold' }}
              onClick={() => {
                handleClick('/policy/privacy/20220705');
              }}
            >
              개인 정보 보호
            </FooterButton>
            <p style={{ fontSize: '12px', color: '#CCCCCC' }}>
              해당 웹사이트는
              <br />
              Chrome에 최적화되어 있습니다.
            </p>
          </Grid>

          <Grid item xs={6} md={3} lg={2}>
            <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999' }}>테스트 서비스</p>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/ui');
                }}
              >
                UI 진단 테스트
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/ux');
                }}
              >
                UX 포지션 테스트
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/scenario');
                }}
              >
                시나리오 테스트
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/customer');
                }}
              >
                퍼소나 테스트
              </FooterButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3} lg={2}>
            <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999' }}>제품</p>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/feature');
                }}
              >
                솔루션 소개
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/pricing');
                }}
              >
                가격 안내
              </FooterButton>

              {isTablet && (
                <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999', paddingTop: '32px' }}>문의</p>
                  <FooterButton
                    color={darkMode ? 'white' : 'primary'}
                    onClick={() => {
                      handleClick('/tri');
                    }}
                  >
                    설계 신청하기
                  </FooterButton>
                </Stack>
              )}
            </Stack>
          </Grid>

          {!isTablet && (
            <Grid item xs={0} md={0} lg={2}>
              <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999' }}>문의</p>
                <FooterButton
                  color={darkMode ? 'white' : 'primary'}
                  onClick={() => {
                    handleClick('/tri');
                  }}
                >
                  설계 신청하기
                </FooterButton>
              </Stack>
            </Grid>
          )}
        </GridContainer>
      </div>
    </>
  );
}

export default Footer;
