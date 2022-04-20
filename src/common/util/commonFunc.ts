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
