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
      title: '데이터 기반 의사결정 ',
      desc: '팀에서 추측한 가설이 아니라, 실제 고객의 피드백으로 의사결정하세요.',
      image: FeatureSlide1,
    },
    {
      title: '의사소통 비용 절약',
      desc: '팀을 설득할 때, 가장 강력한 지원군은 고객입니다. 당신의 의견에 설득력을 더해보세요.',
      image: FeatureSlide2,
    },
    {
      title: '업무 효율화',
      desc: '누구나 할 수 있는 일은 Diby가 대신 해드립니다. 나만 할 수 있는 일에 집중하세요.',
      image: FeatureSlide3,
    },
    // {
    //   title: 'CX Research 히스토리 관리 및 공유',
    //   desc: '리서치 결과와 인사이트를 저장하여 의사결정에 효과적으로 활용할 수 있습니다.',
    //   image: FeatureSlide4,
    // },
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
            Diby에서 CX 리서치를 시작하세요.
            {/*<br />*/}
            {/*CX Research 프로세스를 모두 경험하세요.*/}
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
