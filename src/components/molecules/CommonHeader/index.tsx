import React, { useCallback, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
// import Icon from '../../atoms/Icon';
import Icon from '../../atoms/Icon';
import { colors } from '../../../styles/Common.styles';
import ProfileIcon from '../../atoms/ProfileIcon';
import ImageLogo from '../../../../public/assets/images/Diby-Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import LayerPopup from '../../atoms/LayerPopup';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../store/reducers';
import { updateQueryStatus } from '../../../store/reducers/useQueryControlReducer';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import LogoText from '/public/assets/png/diby_black.png';
import {persistor} from "../../../pages/_app";
import {userReset} from "../../../store/reducers/userReducer";
import {authReset} from "../../../store/reducers/authReducer";
interface PropsType {
  researchHeader?: boolean;
}
const CommonHeader = ({ researchHeader = false }: PropsType) => {
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();
  const isSessionStorage = sessionStorage.getItem('accessToken');
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const [focusProfile, setFocusProfile] = useState<boolean>(false);

  const showLayerPopup = useCallback(
    e => {
      e.stopPropagation();
      setFocusProfile(true);
    },
    [focusProfile],
  );

  const handleLogout = useCallback(async () => {
    clearLocalStorage()
    dispatch(userReset())
    dispatch(authReset())
    dispatch(updateQueryStatus({ name: 'userInfoQuery', status: false }));
    router.push('/');
  }, []);

  return (
    <FlexBox
      style={{
        boxSizing: 'border-box',
        minWidth: '500px',
        position: 'fixed',
        zIndex: 50,
        borderBottom: researchHeader ? `1px solid #DCDCDC` : 'none',
      }}
      padding={researchHeader ? '0 24px' : '12px 40px'}
      justify={'space-between'}
      align={'center'}
      height={researchHeader ? '72px' : '48px'}
      backgroundColor={researchHeader ? colors.white : colors.grey._3c}
    >
      <FlexBox
        justify={'flex-start'}
        align={'center'}
        onClick={pathname === '/admin/profile' ? () => console.log('') : () => router.push('/admin/team')}
        style={{ cursor: 'pointer' }}
      >
        {/*<Icon name={'LOGO_ICON'} size={40} />*/}
        {!researchHeader && (
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '12px',
            }}
          >
            <img src={ImageLogo.src} alt={'ImageLogo'} style={{ width: '15.2px', height: '20.8px' }} />
          </div>
        )}

        <img
          src={researchHeader ? LogoText.src : 'https://diby-storage.s3.ap-northeast-2.amazonaws.com/static/images/diby_white1.png'}
          alt={'Logo'}
          style={{ width: researchHeader ? '49px' : '56px', height: researchHeader ? '32px' : '30px' }}
        />
      </FlexBox>

      {router.pathname !== '/admin/research/recommendation' &&
        router.pathname !== '/admin/research/recommendation/result' &&
        (isSessionStorage ? null : (
          <FlexBox justify={'flex-end'} align={'center'}>
            <FlexBox justify={'flex-end'} align={'center'} onClick={e => showLayerPopup(e)} style={{ cursor: 'pointer' }}>
              <ProfileIcon />
              <Icon
                name={researchHeader ? 'CHEVRON_DOWN_THIN' : 'NAVIGATION_CHEVRON_DOWN'}
                style={{ marginLeft: '8px', cursor: 'pointer' }}
                size={24}
              />
            </FlexBox>

            <LayerPopup
              display={focusProfile}
              setFocusProfile={setFocusProfile}
              topText={userInfo.userId}
              normalText={[
                { text: '프로필 설정', onClick: pathname === '/admin/profile' ? () => console.log('') : () => router.push('/admin/profile/update') },
                { text: '로그아웃', onClick: handleLogout },
              ]}
            />
          </FlexBox>
        ))}
    </FlexBox>
  );
};

export default CommonHeader;
