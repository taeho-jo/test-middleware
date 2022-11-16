// Components
import Section1 from '../../diby-client-landing/pages/Home/Section1';
import Section2 from '../../diby-client-landing/pages/Home/Section2';
import Section3 from '../../diby-client-landing/pages/Home/Section3';
import Section4 from '../../diby-client-landing/pages/Home/Section4';
import CustomFooter from '../../diby-client-landing/pages/Home/CustomFooter';
import withTokenAuth from '../hoc/withTokenAuth';
import { fetchUserInfoApi } from '../api/userApi';
import { Cookies } from 'react-cookie';
import { fetchEmailConfirmApi } from '../api/authApi';
import axios from 'axios';

// Cookies
const cookie = new Cookies();
const expires = new Date();
expires.setDate(expires.getDate() + 9);

const Home = props => {
  console.log(props);
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CustomFooter />
    </div>
  );
};

// export default withTokenAuth(Home, true);
export default Home;

export async function getServerSideProps(context) {
  try {
    const { cookies } = context.req;
    const { query } = context;
    console.log(query);
    const accessToken = cookies?.accessToken;

    // token 이 있을 경우
    if (accessToken) {
      const response = await fetchUserInfoApi(accessToken);
      console.log(response?.data);
      const userInfo = response?.data;
      console.log(userInfo);
      return {
        redirect: {
          permanent: false,
          destination: '/admin/profile',
        },
        props: userInfo,
      };
    } else {
      const response = await axios.post(`http://localhost:3000/api/emailConfirm`, { accessToken: query.token });
      console.log(response);
      return {
        props: {},
      };
      // 이메일 인증
      // if (query.token) {
      //   cookie.set(`accessToken`, query.token, { path: '/', expires });
      //   const confirmResponse = await fetchEmailConfirmApi(query.token);
      //   if (confirmResponse?.code === '200') {
      //     const response = await fetchUserInfoApi(accessToken);
      //     const userInfo = response?.data;
      //     if (userInfo?.emailVerifiedYn === 'Y') {
      //       if (userInfo?.firstTimeYn === 'Y') {
      //         return {
      //           redirect: {
      //             permanent: false,
      //             destination: '/admin/profile',
      //           },
      //           props: {},
      //         };
      //       }
      //       if (userInfo?.firstTimeYn === 'N') {
      //         return {
      //           redirect: {
      //             permanent: false,
      //             destination: '/admin/team',
      //           },
      //           props: {},
      //         };
      //       }
      //     }
      //     if (userInfo?.emailVerifiedYn === 'N') {
      //       return {
      //         props: {},
      //       };
      //     }
      //   }
      // } else {
      //   return {
      //     props: {},
      //   };
      // }
    }
    // const header = {
    //   Authorization: `Bearer ${accessToken}`,
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': false,
    // };
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/user/info`, { headers: header });
    //
    // const data = response.data;
    //
    // if (data.code === '200') {
    //   if (data?.data?.emailVerifiedYn === 'N') {
    //     return {
    //       redirect: {
    //         permanent: false,
    //         destination: '/',
    //       },
    //       props: {},
    //     };
    //   }
    // }
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
}
