import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { GridContainer } from '../../components/Grid';
import CompanyLogo1 from '../../../public/assets/images/company/companylogo_main1.png';
import CompanyLogo2 from '../../../public/assets/images/company/companylogo_main2.png';
import CompanyLogo3 from '../../../public/assets/images/company/companylogo_main3.png';
import CompanyLogo4 from '../../../public/assets/images/company/companylogo_main4.png';
import CompanyLogo5 from '../../../public/assets/images/company/companylogo_main5.png';
import CompanyLogo8 from '../../../public/assets/images/company/companylogo_main8.png';

const labs = [
  { name: 'CompanyLogo1', image: CompanyLogo1 },
  { name: 'CompanyLogo2', image: CompanyLogo2 },
  { name: 'CompanyLogo3', image: CompanyLogo3 },
  { name: 'CompanyLogo4', image: CompanyLogo4 },
  { name: 'CompanyLogo5', image: CompanyLogo5 },
  { name: 'CompanyLogo8', image: CompanyLogo8 },
];

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    marginTop: '240px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '320px',
  },
  marginBottom: '160px',
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

function Section1() {
  return (
    <Section>
      <GridContainer container spacing={16} style={{ width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
        <Grid item sm={12} md={12} lg={12} style={{ paddingBottom: '60px' }}>
          <Header data-aos="fade-up">
            스타트업 지원기관을 통해
            <br />
            Diby의 크레딧을 받아보세요.
          </Header>
        </Grid>
        {labs.map((lab, index) => (
          <Grid key={`lab_${index}`} item xs={6} md={3} lg={3}>
            <div style={{ display: 'flex', height: '80px', alignItems: 'center', background: 'white' }}>
              <div style={{ flex: 1 }} />
              <img src={lab.image.src} alt={lab.name} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
              <div style={{ flex: 1 }} />
            </div>
          </Grid>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Section1;
