import { fetchUserInfoApi } from '../../../api/userApi';

export default async function (req, res) {
  try {
    const { body } = req;
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
  } catch (e) {
    res.status(500).json({ message: '500입니다.', data: e });
  }
}
