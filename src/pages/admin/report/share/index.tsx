import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import FlexBox from '../../../../components/atoms/FlexBox';
import LogoText from '/public/assets/png/diby_black.png';
import LogoImg from '/public/assets/png/diby_simbol_black.png';
import { heading1_bold } from '../../../../styles/FontStyles';
import Loader from 'react-spinners/BeatLoader';

const Share = () => {
  const router = useRouter();
  const { teamSeq } = router.query;

  useEffect(() => {
    if (teamSeq) {
      // router.replace(`/admin/report/${teamSeq}/?share=true`);
      router.replace(`/admin/report/${teamSeq}/?isShare=true`);
    }
  }, [teamSeq]);

  return (
    <FlexBox direction={'column'} style={{ marginTop: '123px' }}>
      <img style={{ width: '140px', height: '80px', marginLeft: '24px', marginBottom: '40px' }} src={LogoText.src} alt="DibyLogo" />
      <span css={[heading1_bold, { marginBottom: '40px' }]}>리포트 페이지로 이동할게요.</span>
      <img style={{ width: '144px', marginLeft: '24px', marginBottom: '40px' }} src={LogoImg.src} alt="LogoImg" />
      <Loader color={'#A8FF69'} size={20} margin={6} />
    </FlexBox>
  );
};

export default Share;
// https://nextjs.org/docs/messages/client-side-exception-occurred
//   main-cc8aaf46e409e659.js:1 A client-side exception has occurred, see here for more info
