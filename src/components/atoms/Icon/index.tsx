import TestIcon from '../../../assets/svg/folder_icon_217583.svg';

const IconTypes = {
  TEST: TestIcon,
};

interface PropsType {
  name: 'TEST';
  size?: number;
}

const Icon = ({ name, size = 16 }: PropsType) => {
  const IconComponent = IconTypes[name];

  return <IconComponent width={size} height={size} viewBox="0 0 24 24" />;
};

export default Icon;
