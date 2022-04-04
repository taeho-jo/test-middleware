import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser';
import { Button, Stack } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import Footer from '../../components/Footer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ImgFooter1 from '../../assets/images/home/home_footer_1.png';
import ImgFooter2 from '../../assets/images/home/home_footer_2.png';
import { breakpoints } from '../../Theme';
import { emailRex } from '../../../src/common/regex';
import { showToast } from '../../../src/store/reducers/toastReducer';

const Section = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundPositionX: '-500px, calc(64px - 300px)',
    backgroundPositionY: 'calc(100% - 100px), calc(100% - 100px)',
  },
  [theme.breakpoints.up('md')]: {
    backgroundPositionX: '-300px, calc(64px - 300px)',
    backgroundPositionY: 'calc(100% + 10px), calc(100% + 10px)',
  },
  [theme.breakpoints.up('lg')]: {
    backgroundPositionX: 'center, center',
    backgroundPositionY: 'calc(100% + 10px), calc(100% + 10px)',
  },
  [theme.breakpoints.up('xl')]: {
    backgroundPositionX: 'center, center',
    backgroundPositionY: 'calc(100% + 10px), calc(100% + 10px)',
  },
  width: '100%',
  height: '1080px',
  paddingTop: '100px',
  backgroundImage: `url(${ImgFooter2.src}), url(${ImgFooter1.src})`,
  backgroundRepeat: 'no-repeat, no-repeat',
}));

const TitleWrapper = styled('div')(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    marginTop: '-180px',
    paddingBottom: '180px',
    paddingTop: '240px',
    paddingLeft: '32px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '-80px',
    paddingBottom: '80px',
    paddingTop: '240px',
    paddingLeft: '56px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '280px',
    display: 'flex',
  },
  [theme.breakpoints.up('xl')]: {
    paddingTop: '260px',
    display: 'flex',
  },
}));

const FooterDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: '0px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '80px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingTop: '120px',
    paddingLeft: 'calc(50% - 1000px)',
    paddingRight: 'calc(50% - 1000px)',
  },
}));

const Title = styled('p')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  fontWeight: 'bold',
  color: theme.palette.white.main,
}));

const MailForm = styled('input')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: '220px',
  },
  [theme.breakpoints.up('md')]: {
    width: '320px',
  },
  fontSize: '16px',
  lineHeight: '48px',
  height: '36px',
  borderRadius: '30px',
  padding: '0px 20px',
  background: 'white',
  border: 'none',
}));

const NextButton = styled(Button)(({ theme }) => ({
  fontWeight: '700',
  textTransform: 'none',
  fontSize: '16px',
  height: '36px',
  borderRadius: '18px',
  marginLeft: '16px',
  marginTop: '-2px',
  paddingLeft: '32px',
  paddingRight: '32px',
  boxShadow: 'none !important',
  border: 'none',
  color: 'white',
  [theme.breakpoints.down('lg')]: {
    margin: 0,
    marginTop: '10px',
  },
  // [theme.breakpoints.up('md')]: {
  //   width: '320px',
  // },
}));

const FormBox = styled('form')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  // [theme.breakpoints.up('md')]: {
  //   width: '320px',
  // },
}));

function Section5() {
  const dispatch = useDispatch();
  const form = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [isTablet, setIsTablet] = useState(window.innerWidth < breakpoints.lg);

  const [demoEmail, setDemoEmail] = useState('');

  const sendEmail = e => {
    e.preventDefault();
    console.log(form.current, 'ASDF');
    console.log(demoEmail, 'DEMo Email');
    const isEmail = emailRex.test(demoEmail);
    console.log(isEmail);
    if (isEmail) {
      emailjs.sendForm('service_at8fasb', 'template_8hheby9', form.current, 'ReXcWmA6XR9BI1uLY').then(
        result => {
          console.log(result);
          console.log(result.text);
          if (result.status === 200 && result.text === 'OK') {
            setDemoEmail('');
            dispatch(showToast({ message: '데모 신청이 완료되었습니다.', isShow: true, status: 'success', duration: 5000 }));
          }
        },
        error => {
          dispatch(showToast({ message: error.text, isShow: true, status: 'warning', duration: 5000 }));
        },
      );
    } else {
      console.log('실패');
      dispatch(showToast({ message: '이메일 양식이 아닙니다.', isShow: true, status: 'warning', duration: 5000 }));
    }
  };

  // const sendEmail = useCallback(
  //   e => {
  //     e.preventDefault();
  //     console.log(demoEmail, 'DEMo Email');
  //     const rex =
  //   },
  //   [demoEmail],
  // );

  const handleUpdateEmail = useCallback(
    e => {
      const value = e.target.value;
      setDemoEmail(value);
    },
    [demoEmail],
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
    setIsTablet(window.innerWidth < breakpoints.lg);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <TitleWrapper>
        <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
          <Title data-aos="fade-up">
            초기 스타트업부터 {isMobile && <br />}
            CX Research 팀이 있는 {isTablet && <br />}
            혁신 기업까지,
            <br />
            Diby를 사용합니다.
          </Title>
          <FormBox ref={form} onSubmit={sendEmail}>
            <MailForm
              value={demoEmail}
              onChange={e => handleUpdateEmail(e)}
              data-aos="fade-up"
              type="text"
              name="email"
              placeholder="E-mail을 입력해주세요."
            />
            {/*{!isTablet && (*/}
            <NextButton type="submit" data-aos="fade-up" color="blue" variant="contained" endIcon={<ArrowRightAltIcon style={{ color: 'white' }} />}>
              데모 신청하기
            </NextButton>
            {/*)}*/}
          </FormBox>
          {/*{isTablet && (*/}
          {/*  <NextButton type="submit" data-aos="fade-up" color="blue" variant="contained" endIcon={<ArrowRightAltIcon style={{ color: 'white' }} />}>*/}
          {/*    데모 신청하기*/}
          {/*  </NextButton>*/}
          {/*)}*/}
        </Stack>
      </TitleWrapper>
      <FooterDiv>
        <Footer
          style={{
            background: !isTablet ? 'transparent' : '#F8F8F8',
          }}
        />
      </FooterDiv>
    </Section>
  );
}

export default Section5;
