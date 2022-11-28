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
import { userReset } from '../../../store/reducers/userReducer';
import { authReset } from '../../../store/reducers/authReducer';
import { showDialog } from '../../../store/reducers/commonReducer';
import { Cookies } from 'react-cookie';
import ChannelService from '../../../common/util/channelTalk';
import { teamReset } from '../../../store/reducers/teamReducer';
import { researchReset } from '../../../store/reducers/researchCreateReducer';

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
    const channelTalk = new ChannelService();
    channelTalk.shutdown();
    const cookies = new Cookies();
    cookies.remove('accessToken', { path: '/' });
    cookies.remove('emailVerifiedYn', { path: '/' });
    cookies.remove('firstTimeYn', { path: '/' });
    cookies.remove('userInfo', { path: '/' });
    // clearLocalStorage();

    dispatch(userReset());
    dispatch(authReset());
    dispatch(teamReset());
    dispatch(researchReset());
    dispatch(updateQueryStatus({ name: 'userInfoQuery', status: false }));
    router.push('/');
  }, []);

  const handleMoveHome = () => {
    if (pathname === '/admin/profile') {
      return;
    } else if (pathname === '/admin/research/[id]') {
      const id = router.query.id;
      const cookies = new Cookies();
      // 쿠키 비우기
      cookies.remove('recommendResultSeq', { path: '/' });
      cookies.remove('recommendResearchType', { path: '/' });
      cookies.remove('isLogin', { path: '/' });
      if (id === 'create') {
        dispatch(
          showDialog({
            show: true,
            title: `리서치 설계를 종료하시겠습니까?`,
            content: `기본 정보 입력 후 다음 버튼을 눌러주시면 입력하신 정보를 저장해두실 수 있습니다.`,
            okButton: '종료',
            cancelButton: '취소',
            okButtonColor: colors.red,
            okFunction: () => router.push('/admin/team'),
          }),
        );
      } else {
        dispatch(
          showDialog({
            show: true,
            title: `리서치 설계를 종료하시겠습니까?`,
            content: `종료 이후에도 다시 이어서 진행이 가능합니다.`,
            okButton: '종료',
            cancelButton: '취소',
            okButtonColor: colors.red,
            okFunction: () => router.push('/admin/team'),
          }),
        );
      }
    } else {
      router.push('/admin/team');
    }
  };

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
        // onClick={pathname === '/admin/profile' ? () => console.log('') : () => router.push('/admin/team')}
        onClick={handleMoveHome}
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
        router.pathname !== '/admin/welcome' &&
        router.pathname !== '/admin/reset-password' &&
        router.pathname !== '/admin/reset-password-success' &&
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
                {
                  text: '프로필 설정',
                  onClick:
                    pathname === '/admin/profile'
                      ? () => {
                          return;
                        }
                      : () => router.push('/admin/profile/update'),
                },
                { text: '로그아웃', onClick: handleLogout },
              ]}
            />
          </FlexBox>
        ))}
    </FlexBox>
  );
};

export default CommonHeader;
