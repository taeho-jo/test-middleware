import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/material/styles';
import { Button, Grid, Stack } from '@mui/material';
import { GridContainer } from '../../components/Grid';
import { breakpoints } from '../../Theme';
import ImgTRI from '../../assets/images/img_tri.png';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
}));

const LeftGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
  marginTop: '16px',
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-end',
  },
  marginTop: '16px',
}));

const Header = styled('p')(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  fontWeight: 'bold',
  marginBottom: '0px',
}));

const Title = styled('p')(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  fontWeight: 'bold',
  margin: '0px',
}));

const NextButton = styled(Button)({
  fontWeight: '700',
  textTransform: 'none',
  fontSize: '16px',
  height: '36px',
  borderRadius: '18px',
  marginTop: '32px',
  paddingLeft: '32px',
  paddingRight: '32px',
  boxShadow: 'none !important',
  color: 'white',
});

function Section1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const navigate = useRouter();

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
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
    <div style={{ width: '100%', marginBottom: '150px' }}>
      <Section>
        <GridContainer container spacing={0} style={{ paddingTop: '90px', overflowX: 'hidden' }}>
          <LeftGrid item xs={12} md={7} lg={6}>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <Header>1분안에 끝나는 설계안 받기</Header>
              <Title>지금 바로 무료로 설계안을 받아보세요.</Title>
              <NextButton color="blue" variant="contained" endIcon={isMobile ? undefined : <ArrowRightAltIcon style={{ color: 'white' }} />}>
                1분안에 끝나는 설계안 받아보기
              </NextButton>
            </Stack>
          </LeftGrid>
          <RightGrid item xs={12} md={5} lg={6}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'visible' }}>
              <div style={{ width: '424px', height: '676px', overflowY: 'hidden' }}>
                <img data-aos="fade-up" src={ImgTRI.src} alt="tri" style={{ width: '424px', height: '676px' }} />
              </div>
            </div>
          </RightGrid>
        </GridContainer>
      </Section>
    </div>
  );
}

export default Section1;
