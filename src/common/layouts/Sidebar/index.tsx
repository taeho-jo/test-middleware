import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Components
import Button from '../../../components/atoms/Button';
import FlexBox from '../../../components/atoms/FlexBox';
// Libraries
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
// Types
interface PropsTyps {
  showSidebar: boolean;
  onClick?: () => void;
}

const MENU_LIST = [
  {
    label: 'Home',
    path: '/',
    child: [],
  },
  {
    label: 'Test',
    path: '/graph',
    child: [
      {
        label: 'Graph',
        path: '/graph',
      },
      {
        label: 'Form',
        path: '/form',
      },
    ],
  },
  {
    label: 'Note',
    path: '/note/counter',
    child: [
      {
        label: 'Counter',
        path: '/note/counter',
      },
      {
        label: 'Querytest',
        path: '/note/querytest',
      },
    ],
  },
];

const Sidebar = ({ showSidebar, onClick }: PropsTyps) => {
  const router = useRouter();

  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [subMenuName, setSubMenuName] = useState<string>('');

  // subMenu 토글 함수
  const handleChangeShowSubMenu = useCallback(
    boolean => {
      setShowSubMenu(boolean);
    },
    [showSubMenu],
  );

  const handleUpdateSubMenuName = useCallback(
    string => {
      setSubMenuName(string);
    },
    [subMenuName],
  );

  // 페이지 이동 함수
  const handleClickMenu = useCallback(
    (label: string, path: string, isChildren?: boolean) => {
      if (isChildren) {
        router.push(path);
      }
      if (!isChildren) {
        if (label === 'Test') {
          handleUpdateSubMenuName('Test');
          handleChangeShowSubMenu(true);
          router.push(path);
        } else if (label === 'Note') {
          handleUpdateSubMenuName('Note');
          handleChangeShowSubMenu(true);
          router.push(path);
        } else {
          handleUpdateSubMenuName('');
          handleChangeShowSubMenu(false);
          router.push(path);
        }
      }
    },
    [showSubMenu, subMenuName, router.pathname],
  );

  useEffect(() => {
    const path = router.pathname;
    if (path === '/graph' || path === '/form') {
      handleUpdateSubMenuName('Test');
      handleChangeShowSubMenu(true);
    } else if (path === '/note' || path === '/note/counter') {
      handleUpdateSubMenuName('Note');
      handleChangeShowSubMenu(true);
    } else {
      handleUpdateSubMenuName('');
      handleChangeShowSubMenu(false);
    }
  }, [router.pathname]);

  return (
    <aside css={sidebarStyle(showSidebar)}>
      <FlexBox justify={'flex-end'} padding={'0'}>
        <Button buttonType={'basic'} onClick={onClick} backgroundColor={`${colors.blue._300}`} btnText={showSidebar ? '닫기' : '열기'} />
      </FlexBox>
      {MENU_LIST.map((el, index) => {
        return (
          <Fragment key={index}>
            <FlexBox padding={'10px 30px'} justify={'space-between'} width={'80%'} onClick={() => handleClickMenu(el.label, el.path, false)}>
              {/*<Link href={el.path}>{el.label}</Link>*/}
              {/*<ShortText>{el.label}</ShortText>*/}
              {/*<ShortText text={el.label} color={'white'} fontWeight={'bold'} cursor={'pointer'} />*/}

              {el.child.length === 0 ? null : el.child.length > 0 && showSubMenu && subMenuName === el.label ? (
                <MdOutlineKeyboardArrowDown color={'white'} size={28} cursor={'pointer'} onClick={() => handleClickMenu(el.label, el.path, false)} />
              ) : (
                <MdOutlineKeyboardArrowUp color={'white'} size={28} cursor={'pointer'} onClick={() => handleClickMenu(el.label, el.path, false)} />
              )}
            </FlexBox>

            {/*Sub Menu*/}
            {el.child.length > 0 && showSubMenu && subMenuName === el.label
              ? el?.child?.map((item, index) => {
                  return (
                    <div css={subMenuStyle} key={index}>
                      <FlexBox justify={'flex-start'} padding={'10px 30px 10px 45px'} onClick={() => handleClickMenu(item.label, item.path, true)}>
                        {/*<ShortText text={item.label} color={'white'} fontWeight={'bold'} cursor={'pointer'} />*/}
                      </FlexBox>
                    </div>
                  );
                })
              : null}
          </Fragment>
        );
      })}
    </aside>
  );
};

export default Sidebar;

const sidebarStyle = showSidebar => css`
  position: fixed;
  top: 0;
  left: ${showSidebar ? 0 : '-230px'};
  width: 300px;
  height: 100vh;
  background: #006666;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-radius: 0;
  border-color: rgba(64, 194, 133, 0.693);
  transition: 0.6s ease;
`;

const subMenuStyle = css``;
