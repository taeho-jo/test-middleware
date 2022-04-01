import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import { Widget } from '@typeform/embed-react';
import { breakpoints } from '../../Theme';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: '90px',
  paddingBottom: '120px',
}));

const Header = styled('p')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'bold',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: 'bold',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
    lineHeight: '64px',
    fontWeight: 'bold',
  },
}));

const Title = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
  whiteSpace: 'pre-wrap',
  paddingBottom: '24px',
}));

function Section3() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <GridContainer container spacing={16}>
        <Grid item sm={12} md={12} lg={12}>
          <Header data-aos="fade-up">설계안은 즉시 메일로 전송됩니다.</Header>
          <Title data-aos="fade-up">
            간략한 비용과 소요시간을 확인 후, <br />
            프로젝트 시작 여부를 결정할 수 있습니다.
          </Title>
          <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center' }}>
            <Widget id="lmyqEfEb" style={{ width: '100%', height: isMobile ? '660px' : '524px' }} className="my-form" />
          </div>
        </Grid>
      </GridContainer>
    </Section>
  );
}

export default Section3;
