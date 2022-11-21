import ProfileSettingFirst from '../../../components/organisms/ProfileSettingFirst';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../../store/reducers/userReducer';
import { Cookies } from 'react-cookie';

const Profile = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.data) {
      dispatch(setUserInfo(JSON.parse(props.data)));
    }
  }, [props?.data, dispatch]);
  return <ProfileSettingFirst />;
};

export default Profile;

export async function getServerSideProps({ req, res }) {
  const { cookies } = req;
  if (cookies.userInfo) {
    return {
      props: {
        data: cookies?.userInfo,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
