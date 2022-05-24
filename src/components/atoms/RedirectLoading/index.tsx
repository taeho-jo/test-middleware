import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import FlexBox from '../FlexBox';
import logo from '../../../../public/assets/images/common/loadingLogo.png';

const RedirectLoading = () => {
  return (
    <FlexBox justify={'center'} align={'center'} height={'100vh'} direction={'column'}>
      <img src={logo.src} alt="Log" css={{ position: 'absolute' }} />
      <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '300px' }}>
        <ClipLoader color={'#a8ff69'} loading={true} size={200}></ClipLoader>
      </div>
    </FlexBox>
  );
};

export default RedirectLoading;
