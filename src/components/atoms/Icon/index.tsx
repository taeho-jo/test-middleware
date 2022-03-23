import Google from '../../../../public/assets/svg/google.svg';
import TestIcon from '../../../../public/assets/svg/folder_icon_217583.svg';
import ActionCreate from '../../../../public/assets/svg/action_create.svg';
import ActionMore from '../../../../public/assets/svg/action_more_v.svg';
import ActionSetting from '../../../../public/assets/svg/action_settings.svg';
import NavigationArrowLeft from '../../../../public/assets/svg/navigation_arrow_left.svg';
import NavigationArrowRight from '../../../../public/assets/svg/navigation_arrow_right.svg';
import NavigationChevronDown from '../../../../public/assets/svg/navigation_chevron_down_s.svg';
import NavigationChevronRight from '../../../../public/assets/svg/navigation_chevron_right.svg';
import NavigationCloseLg from '../../../../public/assets/svg/navigation_close_l.svg';
import NavigationCloseSm from '../../../../public/assets/svg/navigation_close_s.svg';
import LogoIcon from '../../../../public/assets/svg/logoDiby.svg';
import LogoText from '../../../../public/assets/svg/logoText.svg';
import { IconType } from '../../../common/types/commonTypes';

const IconTypes = {
  GOOGLE: Google,
  TEST: TestIcon,
  ACTION_CREATE: ActionCreate,
  ACTION_SETTING: ActionSetting,
  ACTION_MORE: ActionMore,
  NAVIGATION_ARROW_LEFT: NavigationArrowLeft,
  NAVIGATION_ARROW_RIGHT: NavigationArrowRight,
  NAVIGATION_CHEVRON_DOWN: NavigationChevronDown,
  NAVIGATION_CHEVRON_RIGHT: NavigationChevronRight,
  NAVIGATION_CLOSE_LG: NavigationCloseLg,
  NAVIGATION_CLOSE_SM: NavigationCloseSm,
  LOGO_ICON: LogoIcon,
  LOGO_TEXT: LogoText,
};

interface PropsType {
  name: IconType;
  // name: string;
  size?: number;
}

const Icon = ({ name, size = 16 }: PropsType) => {
  const IconComponent = IconTypes[name];

  return <IconComponent width={size} height={size} viewBox="0 0 24 24" />;
};

export default Icon;
