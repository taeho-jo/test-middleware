import React, { useCallback, useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../store/reducers';
// Components
// Styles
import { css } from '@emotion/react';
import Header from './Header';
import BackGroundImg2 from '../../assets/background_img2.png';
import BackGroundImg from '../../assets/background_img.png';

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
        <>
          <Header />
          <div css={mainContainer}>
            {/*<Sidebar showSidebar={showSidebar} onClick={handleChangeShowSidebar} />*/}
            <main css={contentsContainer(showSidebar)}>{children}</main>
          </div>
        </>
      ) : (
        <>
          <Header />
          <div css={mainContainer}>
            <main css={fullMainContainer}>
              <div css={backgroundStyle(BackGroundImg2)}>
                <div css={backgroundStyle(BackGroundImg)}>{children}</div>
              </div>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;

const mainContainer = css`
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
  //margin-top: 64px;
  overflow: hidden;
`;
const contentsContainer = showSidebar => css`
  width: 100%;
  min-height: 100vh;
  padding: ${showSidebar ? '30px 30px 30px 330px' : '30px 30px 30px 100px'};
  transition: 0.6s ease;
`;
const fullMainContainer = css`
  width: 100%;
  //min-height: 100vh;
  //padding: 30px;
  transition: 0.6s ease;
`;
const backgroundStyle = BackGroundImg => css`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  overflow: hidden;
  background-image: url(${BackGroundImg.src});
  background-repeat: no-repeat;
`;
