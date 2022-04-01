import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { breakpoints } from '../../Theme';
import { GridContainer } from '../../components/Grid';
import FeatureSlide1 from '../../assets/images/feature/img_monitoring.png';
import FeatureSlide2 from '../../assets/images/feature/img_design.png';
import FeatureSlide3 from '../../assets/images/feature/img_history.png';
import FeatureSlide4 from '../../assets/images/feature/img_feedback.png';
import Slider from 'react-slick';

const Section = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: '92px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '200px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '256px',
  },
  width: '100%',
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
  margin: '0',
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
}));

const Desc = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
}));

function Section3() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  const slides = [
    {
      title: 'Activity Monitoring 을 통한 문제 정의',
      desc: '프로덕트별 맞춤화된 KPI 를 정의하고, 추적합니다.',
      image: FeatureSlide1,
    },
    {
      title: 'CX Research 설계',
      desc: '가장 적합한 피드백 수집 방법을 추천하고, 검증된 문항을 제공합니다.',
      image: FeatureSlide2,
    },
    {
      title: '피드백 주문',
      desc: '원하는 순간, 원하는 조건의 응답자에게 피드백을 수집합니다.',
      image: FeatureSlide3,
    },
    {
      title: 'CX Research 히스토리 관리 및 공유',
      desc: '리서치 결과와 인사이트를 저장하여 의사결정에 효과적으로 활용할 수 있습니다.',
      image: FeatureSlide4,
    },
  ];

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  };

  return (
    <Section>
      <GridContainer container spacing={16}>
        <Grid item sm={12} md={12} lg={12}>
          <Header data-aos="fade-up">
            하나의 대시보드에서
            <br />
            CX Research 프로세스를 모두 경험하세요.
          </Header>
          <Slider {...settings} className="slick-box">
            {slides.map((slide, index) => (
              <div data-aos="fade-up" key={`slide_${index}`}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <Title style={{ padding: isMobile ? '16px 0 0 16px' : '40px 0 0 40px' }}>{slide.title}</Title>
                    <Desc style={{ padding: isMobile ? '0 0 0 16px' : '0 0 0 40px' }}>{slide.desc}</Desc>
                  </div>
                  <img
                    src={slide.image.src}
                    alt="slide"
                    style={{
                      width: isMobile ? 'calc(100vw - 64px)' : '308px',
                      height: isMobile ? 'auto' : '280px',
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </Grid>
      </GridContainer>
    </Section>
  );
}

export default Section3;
