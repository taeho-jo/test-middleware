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
              ????????? ???????????? ?????????
              <br />
              ?????????, ????????????, ?????????, ???????????? ??????
              <br />
              ??????????????? ??????????????????.
            </p>
            <p style={{ fontSize: '12px', color: color }}>??? DBDLAB Corp.</p>
            <FooterButton
              color={darkMode ? 'white' : 'primary'}
              style={{ fontSize: '14px', fontWeight: 'bold' }}
              onClick={() => {
                handleClick('/rules/service/20220705');
              }}
            >
              ?????? ??????
            </FooterButton>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#3c3c46', marginRight: '10px' }}>???</span>
            <FooterButton
              color={darkMode ? 'white' : 'primary'}
              style={{ fontSize: '14px', fontWeight: 'bold' }}
              onClick={() => {
                handleClick('/policy/privacy/20220705');
              }}
            >
              ?????? ?????? ??????
            </FooterButton>
            <p style={{ fontSize: '12px', color: '#CCCCCC' }}>
              ?????? ???????????????
              <br />
              Chrome??? ??????????????? ????????????.
            </p>
          </Grid>

          <Grid item xs={6} md={3} lg={2}>
            <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999' }}>????????? ??????</p>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/ui');
                }}
              >
                ????????? ?????????
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/ux');
                }}
              >
                UX ????????? ??????
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/scenario');
                }}
              >
                ???????????? ??????
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/usecases/customer');
                }}
              >
                ????????? ??????
              </FooterButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3} lg={2}>
            <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999' }}>??????</p>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/feature');
                }}
              >
                ????????? ??????
              </FooterButton>
              <FooterButton
                color={darkMode ? 'white' : 'primary'}
                onClick={() => {
                  handleClick('/pricing');
                }}
              >
                ?????? ??????
              </FooterButton>

              {isTablet && (
                <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999', paddingTop: '32px' }}>??????</p>
                  <FooterButton
                    color={darkMode ? 'white' : 'primary'}
                    onClick={() => {
                      handleClick('/admin/research/recommendation');
                    }}
                  >
                    ?????? ????????????
                  </FooterButton>
                </Stack>
              )}
            </Stack>
          </Grid>

          {!isTablet && (
            <Grid item xs={0} md={0} lg={2}>
              <Stack direction="column" spacing={16} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#999999' }}>??????</p>
                <FooterButton
                  color={darkMode ? 'white' : 'primary'}
                  onClick={() => {
                    handleClick('/admin/research/recommendation');
                  }}
                >
                  ?????? ????????????
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
