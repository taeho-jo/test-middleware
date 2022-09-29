import IconAlert from '../../../public/assets/svg/icon_alert.svg';
import IconFeedback2 from '../../../public/assets/svg/icon_feedback2.svg';

export type JustifyType = 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';

export type ColorsType =
  | '#cfffac'
  | '#a8ff69'
  | '#8bce5b'
  | '#95efe9'
  | '#24e1d5'
  | '#1db5ab'
  | '#94bbf5'
  | '#2878f0'
  | '#2262c1'
  | '#ba9dee'
  | '#7b3ce9'
  | '#6431bc'
  | '#fe4e56'
  | '#2c2c36'
  | '#3c3c46'
  | '#666666'
  | '#999999'
  | '#cccccc'
  | '#ececec'
  | '#fafafa'
  | '#ffffff'
  | '#dcdcdc';

export type IconType =
  | 'GOOGLE'
  | 'ACTION_ADD_SMALL'
  | 'ACTION_CREATE'
  | 'ACTION_SETTING'
  | 'ACTION_MORE'
  | 'ACTION_ADD_CIRCLE'
  | 'ACTION_RESET'
  | 'ACTION_RESET_DISABLED'
  | 'NAVIGATION_ARROW_LEFT'
  | 'NAVIGATION_ARROW_RIGHT'
  | 'NAVIGATION_CHEVRON_DOWN'
  | 'NAVIGATION_CHEVRON_RIGHT'
  | 'NAVIGATION_CLOSE_LG'
  | 'NAVIGATION_CLOSE_SM'
  | 'LOGO_ICON'
  | 'LOGO_TEXT'
  | 'ICON_ALERT'
  | 'ICON_FEEDBACK2'
  | 'ICON_TESTING'
  | 'GOOGLE_DISABLED'
  | 'ACTION_CREATE_DISABLED'
  | 'ACTION_SETTING_DISABLED'
  | 'ACTION_MORE_DISABLED'
  | 'NAVIGATION_ARROW_LEFT_DISABLED'
  | 'NAVIGATION_ARROW_RIGHT_DISABLED'
  | 'NAVIGATION_CHEVRON_DOWN_DISABLED'
  | 'NAVIGATION_CHEVRON_RIGHT_DISABLED'
  | 'NAVIGATION_CLOSE_LG_DISABLED'
  | 'NAVIGATION_CLOSE_SM_DISABLED'
  | 'LOGO_ICON_DISABLED'
  | 'LOGO_TEXT_DISABLED'
  | 'ICON_ALERT_DISABLED'
  | 'ICON_FEEDBACK2_DISABLED'
  | 'ICON_TESTING_DISABLED'
  | 'ALERT_NORMAL'
  | 'CUSTOMER_HOVER'
  | 'CUSTOMER_INACTIVE'
  | 'SCENARIO_HOVER'
  | 'SCENARIO_INACTIVE'
  | 'UITEST_HOVER'
  | 'UITEST_INACTIVE'
  | 'UXPOSITION_HOVER'
  | 'UXPOSITION_INACTIVE'
  | 'MORE_HORIZON'
  | 'ACTION_FILTER'
  | 'CHEVRON_RIGHT_THIN'
  | 'CHEVRON_LEFT_THIN'
  | 'ACTION_FILTER'
  | 'LOCK'
  | 'DOWNLOAD'
  | 'RECEIPT'
  | 'REPORT'
  | 'NOTI';

export interface InputType {
  label: string;
  placeholder: string;
  type: string;
  pattern?: RegExp;
  errorMsg?: string;
  line?: boolean;
}
