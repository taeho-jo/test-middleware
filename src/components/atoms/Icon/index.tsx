import Google from '/public/assets/svg/google.svg';
import TestIcon from '/public/assets/svg/folder_icon_217583.svg';
import ActionAddSmall from '/public/assets/svg/action_add_small.svg';
import ActionCreate from '/public/assets/svg/action_create.svg';
import ActionMore from '/public/assets/svg/action_more_v.svg';
import ActionSetting from '/public/assets/svg/action_settings.svg';
import ActionAddCircle from '/public/assets/svg/action_add_circle.svg';
import ActionSearch from '/public/assets/svg/action_search.svg';
import ActionShare from '/public/assets/svg/action_share.svg';
import NavigationArrowLeft from '/public/assets/svg/navigation_arrow_left.svg';
import NavigationArrowRight from '/public/assets/svg/navigation_arrow_right.svg';
import NavigationChevronDown from '/public/assets/svg/navigation_chevron_down_s.svg';
import CloseSmall from '/public/assets/svg/close_small.svg';
import ChevronDownThin from '/public/assets/svg/chevron_down_thin.svg';
import ChevronRightThin from '/public/assets/svg/chevron_right_thin.svg';
import NavigationChevronRight from '/public/assets/svg/navigation_chevron_right.svg';
import NavigationChevronRightDisabled from '/public/assets/svg/navigation_chevron_right_disabled.svg';
import NavigationCloseLg from '/public/assets/svg/navigation_close_l.svg';
import NavigationCloseSm from '/public/assets/svg/navigation_close_s.svg';
import LogoIcon from '/public/assets/svg/logoDiby.svg';
import LogoText from '/public/assets/svg/logoText.svg';
import AlertNormal from '/public/assets/svg/alert_normal.svg';
import IconFeedback2 from '/public/assets/svg/icon_feedback2.svg';
import IconTesting from '/public/assets/svg/icon_testing.svg';
import IconAlert from '/public/assets/svg/icon_alert.svg';
import CustomerHover from '/public/assets/svg/customer_hover.svg';
import CustomerInactive from '/public/assets/svg/customer_inactive.svg';
import ScenarioHover from '/public/assets/svg/scenario_hover.svg';
import ScenarioInactive from '/public/assets/svg/scenario_inactive.svg';
import UiTestHover from '/public/assets/svg/uitest_hover.svg';
import UiTestInactive from '/public/assets/svg/uitest_inactive.svg';
import UxPositionHover from '/public/assets/svg/uxposition_hover.svg';
import UxPositionInactive from '/public/assets/svg/uxposition_inactive.svg';
import MoreHorizon from '/public/assets/svg/more_horizon.svg';
import Member from '/public/assets/svg/member.svg';
import Noti from '/public/assets/svg/noti.svg';

import { css } from '@emotion/react';

interface PropsType {
  forwardref?: any;
  name: any;
  size?: number;
  style?: any;
  iconColor?: string;
  onClick?: () => void;
}

const IconTypes = {
  GOOGLE: Google,
  TEST: TestIcon,
  ACTION_ADD_SMALL: ActionAddSmall,
  ACTION_CREATE: ActionCreate,
  ACTION_SETTING: ActionSetting,
  ACTION_ADD_CIRCLE: ActionAddCircle,
  ACTION_MORE: ActionMore,
  ACTION_SEARCH: ActionSearch,
  ACTION_SHARE: ActionShare,
  NAVIGATION_ARROW_LEFT: NavigationArrowLeft,
  NAVIGATION_ARROW_RIGHT: NavigationArrowRight,
  NAVIGATION_CHEVRON_DOWN: NavigationChevronDown,
  NAVIGATION_CHEVRON_RIGHT: NavigationChevronRight,
  NAVIGATION_CHEVRON_RIGHT_DISABLED: NavigationChevronRightDisabled,
  NAVIGATION_CLOSE_LG: NavigationCloseLg,
  NAVIGATION_CLOSE_SM: NavigationCloseSm,
  LOGO_ICON: LogoIcon,
  LOGO_TEXT: LogoText,
  ICON_ALERT: IconAlert,
  ICON_FEEDBACK2: IconFeedback2,
  ICON_TESTING: IconTesting,
  ALERT_NORMAL: AlertNormal,
  CUSTOMER_HOVER: CustomerHover,
  CUSTOMER_INACTIVE: CustomerInactive,
  SCENARIO_HOVER: ScenarioHover,
  SCENARIO_INACTIVE: ScenarioInactive,
  UITEST_HOVER: UiTestHover,
  UITEST_INACTIVE: UiTestInactive,
  UXPOSITION_HOVER: UxPositionHover,
  UXPOSITION_INACTIVE: UxPositionInactive,
  CHEVRON_DOWN_THIN: ChevronDownThin,
  CHEVRON_RIGHT_THIN: ChevronRightThin,
  MORE_HORIZON: MoreHorizon,
  MEMBER: Member,
  NOTI: Noti,
};

const Icon = ({ name, size = 24, style, iconColor, onClick, forwardref }: PropsType) => {
  const IconComponent = IconTypes[name];
  // const viewBox = `0 0 24 24`;
  const viewBox = `0 0 ${size} ${size}`;

  return (
    <div css={{ width: '24px', height: '24px' }} ref={forwardref} onClick={onClick}>
      <IconComponent
        css={[iconStyle(iconColor), style]}
        // onClick={onClick}
        style={{ boxSizing: 'border-box' }}
        width={size}
        height={size}
        viewBox={viewBox}
      />
    </div>
  );
};

export default Icon;

const iconStyle = iconColor => css`
  ${
    iconColor
      ? `
    color: ${iconColor};
    &:hover {
      color: ${iconColor};
    }
  `
      : ``
  }
  
  }
`;
