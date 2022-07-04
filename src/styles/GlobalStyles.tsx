import React from 'react';
import { useRouter } from 'next/router';
// redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../store/reducers';
// Styles
import { Global } from '@emotion/react';
import reset from './Global.styles';

const GlobalStyles = () => {
  const router = useRouter();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const isAdmin = router.pathname.includes('admin');
  return <Global styles={reset(modalShow, isAdmin, false)} />;
};

export default GlobalStyles;
