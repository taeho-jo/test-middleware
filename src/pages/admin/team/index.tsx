import React, { useEffect } from 'react';
import TeamDashboard from '../../../components/organisms/TeamDashboard';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../../store/reducers/userReducer';

const Team = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.data) {
      dispatch(setUserInfo(JSON.parse(props.data)));
    }
  }, [props?.data, dispatch]);
  return <TeamDashboard />;
};
export default Team;

export async function getServerSideProps({ req, res }) {
  const { cookies } = req;
  if (cookies.userInfo) {
    console.log(cookies.userInfo);
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
