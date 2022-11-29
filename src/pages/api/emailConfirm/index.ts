import { fetchEmailConfirmApi } from '../../../api/authApi';
import { fetchUserInfoApi } from '../../../api/userApi';
import { Cookies } from 'react-cookie';
import { setCookie } from 'cookies-next';

const cookies = new Cookies();
const expires = new Date();
expires.setDate(expires.getDate() + 9);

export default async function (req, res) {
  try {
    const { body } = req;

    // 이메일 인증 api
    const response = await fetchEmailConfirmApi(body.accessToken);

    // 이메일 인증 api 성공
    if (response.code === '200') {
      // 유저 정보 api 호출
      const userInfoResponse = await fetchUserInfoApi(body.accessToken);
      const userInfo = userInfoResponse?.data;

      if (userInfo.emailVerifiedYn === 'Y') {
        if (userInfo.firstTimeYn === 'Y') {
          const sendObject = {
            redirect: {
              permanent: false,
              destination: '/admin/profile',
            },
            props: userInfo,
          };
          res.status(200).json(sendObject);
        }

        if (userInfo.firstTimeYn === 'N') {
          const sendObject = {
            redirect: {
              permanent: false,
              destination: '/admin/team',
            },
            props: userInfo,
          };
          res.status(200).json(sendObject);
        }
      }
    }
    // 이메일 인증 api 실패
    else {
      res.status(500).json({ message: '이메일 인증에 실패했습니다.' });
    }
  } catch (e) {
    console.log(req.body.accessToken);
    res.status(500).json({ message: '500입니다.', data: e });
  }
}
