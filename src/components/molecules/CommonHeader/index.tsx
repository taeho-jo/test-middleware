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

const CommonHeader = () => {
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

  const handleLogout = useCallback(() => {
    localStorage.clear();
    dispatch(updateQueryStatus({ name: 'userInfoQuery', status: false }));
    router.push('/');
  }, []);

  return (
    <FlexBox
      style={{ boxSizing: 'border-box', minWidth: '500px', position: 'fixed', zIndex: 50 }}
      padding={'12px 40px'}
      justify={'space-between'}
      align={'center'}
      height={'48px'}
      backgroundColor={colors.grey._3c}
    >
      <FlexBox
        justify={'flex-start'}
        align={'center'}
        onClick={pathname === '/admin/profile' ? () => console.log('') : () => router.push('/admin/team')}
        style={{ cursor: 'pointer' }}
      >
        {/*<Icon name={'LOGO_ICON'} size={40} />*/}
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

        <img
          src={'https://diby-storage.s3.ap-northeast-2.amazonaws.com/static/images/diby_white1.png'}
          alt={'Logo'}
          style={{ width: '56px', height: '30px' }}
        />
      </FlexBox>

      {isSessionStorage ? null : (
        <FlexBox justify={'flex-end'} align={'center'}>
          <FlexBox justify={'flex-end'} align={'center'} onClick={e => showLayerPopup(e)} style={{ cursor: 'pointer' }}>
            <ProfileIcon />
            <Icon name={'NAVIGATION_CHEVRON_DOWN'} style={{ marginLeft: '8px', cursor: 'pointer' }} size={24} />
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
      )}
    </FlexBox>
  );
};

export default CommonHeader;
