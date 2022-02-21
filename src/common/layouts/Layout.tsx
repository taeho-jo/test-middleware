import React, { useCallback, useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../store/reducers';
// Components
import Sidebar from './Sidebar';
// Styles
import { css } from '@emotion/react';

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const token = useSelector<ReducerType, string>(state => state.auth.token);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleChangeShowSidebar = useCallback(() => {
    setShowSidebar(prev => !prev);
  }, [showSidebar]);

  return (
    <>
      {token ? (
        <div css={mainContainer}>
          <Sidebar
            showSidebar={showSidebar}
            onClick={handleChangeShowSidebar}
          />
          <main css={contentsContainer(showSidebar)}>{children}</main>
        </div>
      ) : (
        <div css={mainContainer}>
          <main css={contentsContainer(false)}>{children}</main>
        </div>
      )}
    </>
  );
};

export default Layout;

const mainContainer = css`
  position: relative;
  width: 100%;
`;
const contentsContainer = showSidebar => css`
  width: 100%;
  min-height: 100vh;
  padding: ${showSidebar ? '30px 30px 30px 330px' : '30px 30px 30px 100px'};
  transition: 0.6s ease;
`;
