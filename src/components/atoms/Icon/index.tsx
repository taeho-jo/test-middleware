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
import IconAlert from '../../../../public/assets/svg/icon_alert.svg';
import IconFeedback2 from '../../../../public/assets/svg/icon_feedback2.svg';
import IconTesting from '../../../../public/assets/svg/icon_testing.svg';
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
  ICON_ALERT: IconAlert,
  ICON_FEEDBACK2: IconFeedback2,
  ICON_TESTING: IconTesting,
};

interface PropsType {
  name: IconType;
  // name: string;
  size?: number;
  style?: any;
  onClick?: () => void;
}

const Icon: any = ({ name, size = 16, style, onClick }: PropsType) => {
  const IconComponent: any = IconTypes[name];
  const viewBox = `0 0 ${size} ${size}`;

  return <IconComponent onClick={onClick} style={{ boxSizing: 'border-box', ...style }} width={size} height={size} viewBox={viewBox} />;
};

export default Icon;
