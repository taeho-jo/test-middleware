import { useDispatch } from 'react-redux';
import { isShow } from '../../store/reducers/modalReducer';

export const isLandingPage = path => {
  switch (path) {
    case (path = '/'):
    case (path = '/usecases/ui'):
    case (path = '/usecases/ux'):
    case (path = '/usecases/scenario'):
    case (path = '/usecases/customer'):
      return true;
    default:
      return false;
  }
};

export const showModal = name => {};
export const closeModal = () => {
  const dispatch = useDispatch();
  dispatch(isShow({ isShow: false, type: '' }));
};
