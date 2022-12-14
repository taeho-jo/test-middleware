import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Components
import { GridContainer } from '../../components/Grid';
import { breakpoints } from '../../Theme';
// Styles
import { styled } from '@mui/material/styles';
import { Button, Grid, Stack } from '@mui/material';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
// Images
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ImgHomeDashboard from '../../../public/assets/images/img_dashboard_2_1_.webp';
import CompanyLogo1 from '../../../public/assets/images/company/companylogo_main1.png';
import CompanyLogo2 from '../../../public/assets/images/company/companylogo_main2.png';
import CompanyLogo3 from '../../../public/assets/images/company/companylogo_main3.png';
import CompanyLogo4 from '../../../public/assets/images/company/companylogo_main4.png';
import CompanyLogo5 from '../../../public/assets/images/company/companylogo_main5.png';
import CompanyLogo6 from '../../../public/assets/images/company/companylogo_main6.png';
import CompanyLogo7 from '../../../public/assets/images/company/companylogo_main7.png';
import CompanyLogo8 from '../../../public/assets/images/company/companylogo_main8.png';

const Section = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '530px',
  },
  [theme.breakpoints.up('md')]: {
    height: '700px',
  },
  width: '100%',
}));

const LeftGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
  marginTop: '16px',
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'inherit',
  },
  marginTop: '8px',
}));

const Title = styled('p')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '37px',
    lineHeight: '56px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '56px',
    lineHeight: '72px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '56px',
    lineHeight: '72px',
  },
  color: 'white',
  margin: '0px',
  fontWeight: 'bold',
  display: 'block',
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

// const titles = ['CX Research', 'Segmentation', 'Indepth Interview', 'Usability Test'];
const titles = ['????????? ?????????', '????????? ??????', '???????????????', '1:1 ?????????', '???????????????'];

const labs = [
  { name: 'CompanyLogo1', image: CompanyLogo1 },
  { name: 'CompanyLogo2', image: CompanyLogo2 },
  { name: 'CompanyLogo3', image: CompanyLogo3 },
  { name: 'CompanyLogo4', image: CompanyLogo4 },
  { name: 'CompanyLogo5', image: CompanyLogo5 },
  { name: 'CompanyLogo6', image: CompanyLogo6 },
  { name: 'CompanyLogo7', image: CompanyLogo7 },
  { name: 'CompanyLogo8', image: CompanyLogo8 },
];

const timerTimeInterval = 1500;

function Section1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [count, setCount] = useState(0);
  const navigate = useRouter();

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  const handleClick = (path: string) => {
    navigate.push(path);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count + 1);
    }, timerTimeInterval);

    return () => {
      clearInterval(timerId);
    };
  }, [count]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', marginBottom: '150px', maxWidth: '1920px', margin: '0 auto' }}>
      <Section>
        <GridContainer container spacing={0} style={{ marginTop: '80px' }}>
          <LeftGrid item xs={12} md={7} lg={6}>
            <div style={{ flex: 1 }} />
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <Title>Do it!!!!!!!</Title>
              <SwitchTransition>
                <CSSTransition key={count} timeout={{ appear: 500, enter: 300, exit: 200 }} classNames="fade">
                  <Title className="gradient-title">{titles[count % titles.length]}</Title>
                </CSSTransition>
              </SwitchTransition>
              <Title>Better Yourself.</Title>
              <p style={{ margin: '40px 0 0 0', color: 'white', fontSize: '16px' }}>??? ????????? ????????? / ???????????? / ????????? / ???????????? ????????????</p>
              <p style={{ margin: '10px 0 0 0', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>??????????????? ?????????</p>
              <NextButton
                onClick={() => {
                  handleClick('/admin/research/recommendation');
                }}
                color="blue"
                variant="contained"
                endIcon={isMobile ? undefined : <ArrowRightAltIcon style={{ color: 'white' }} />}
              >
                ????????? ????????? ????????????
              </NextButton>
            </Stack>
            <div style={{ flex: 1 }} />
          </LeftGrid>
          <RightGrid item xs={0} md={5} lg={6}>
            <div style={{ height: '488px', overflowX: 'visible' }}>
              <div style={{ height: '488px', overflowY: 'hidden', boxShadow: '5px 5px 25px grey', borderRadius: '10px' }}>
                <div data-aos="fade-up" style={{ objectFit: 'contain', width: '840px', height: '488px', borderRadius: '10px' }}>
                  <img
                    src={'https://diby-storage.s3.ap-northeast-2.amazonaws.com/static/images/img_dashboard.png'}
                    alt="dashboard_img2"
                    style={{ width: '840px', height: '488px', borderRadius: '10px' }}
                  />
                </div>
              </div>
            </div>
          </RightGrid>
        </GridContainer>
      </Section>
      <GridContainer container columnSpacing={16} rowSpacing={8} style={{ marginBottom: '112px' }}>
        {labs.map((lab, index) => (
          <Grid data-aos="fade-up" key={`lab_${index}`} item xs={6} md={3} lg={3}>
            <div style={{ display: 'flex', height: '80px', alignItems: 'center', background: 'white' }}>
              {/*<div style={{ flex: 1 }} />*/}
              <div style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}>
                <Image style={{ borderRadius: '10px' }} quality={100} src={lab.image} alt={lab.name} />
              </div>
              {/*<div style={{ flex: 1 }} />*/}
            </div>
          </Grid>
        ))}
      </GridContainer>
    </div>
  );
}

export default Section1;
