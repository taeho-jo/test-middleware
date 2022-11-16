import { fetchEmailConfirmApi } from '../../../api/authApi';
import { fetchUserInfoApi } from '../../../api/userApi';

export default async function (req, res) {
  console.log(req.body);
  try {
    const { body } = req;
    const response = await fetchEmailConfirmApi(body.accessToken);
    if (response.code === '200') {
      const userInfoResponse = await fetchUserInfoApi(body.accessToken);
      const userInfo = userInfoResponse?.data;
      if (userInfo?.emailVerifiedYn === 'Y') {
        if (userInfo?.firstTimeYn === 'Y') {
          const sendObject = {
            redirect: {
              permanent: false,
              destination: '/admin/profile',
            },
            props: userInfo,
          };
          res.status(200).json(sendObject);
        }
        if (userInfo?.firstTimeYn === 'N') {
          const sendObject = {
            redirect: {
              permanent: false,
              destination: '/admin/team',
            },
            props: userInfo,
          };
          res.status(200).json(sendObject);
        }
      } else {
        const sendObject = {
          props: userInfo,
        };
        res.status(200).json(sendObject);
      }
    }
  } catch (e) {
    console.log(req.body.accessToken);
    res.status(500).json({ message: '500입니다.', data: e });
  }
}
