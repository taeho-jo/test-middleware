import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Libraries
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
// Styles
import { css } from '@emotion/react';
import Button from '../../atoms/Button';
import FlexBox from '../../atoms/FlexBox';
import ShortText from '../../atoms/ShortText';
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
    path: '/note',
    child: [],
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
      console.log(
        isChildren,
        path,
        label,
        subMenuName,
        showSubMenu,
        'asdfasdf',
      );

      if (isChildren) {
        router.push(path);
      }
      if (!isChildren) {
        if (label === 'Test') {
          handleUpdateSubMenuName('Test');
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
    } else {
      handleUpdateSubMenuName('');
      handleChangeShowSubMenu(false);
    }
  }, [subMenuName, showSubMenu, router.pathname]);

  return (
    <aside css={sidebarStyle(showSidebar)}>
      <FlexBox justify={'flex-end'} padding={'0'}>
        <Button onClick={onClick}>{showSidebar ? '닫기' : '열기'}</Button>
      </FlexBox>
      {MENU_LIST.map((el, index) => {
        return (
          <Fragment key={index}>
            <FlexBox
              justify={'space-between'}
              width={'80%'}
              onClick={() => handleClickMenu(el.label, el.path, false)}
            >
              {/*<Link href={el.path}>{el.label}</Link>*/}
              {/*<ShortText>{el.label}</ShortText>*/}
              <ShortText
                text={el.label}
                color={'white'}
                fontWeight={'bold'}
                cursor={'pointer'}
              />
              {el.child.length > 0 && !showSubMenu ? (
                <MdOutlineKeyboardArrowUp
                  color={'white'}
                  size={28}
                  cursor={'pointer'}
                  onClick={() => handleClickMenu(el.label, el.path, false)}
                />
              ) : el.child.length > 0 && showSubMenu ? (
                <MdOutlineKeyboardArrowDown
                  color={'white'}
                  size={28}
                  cursor={'pointer'}
                  onClick={() => handleClickMenu(el.label, el.path, false)}
                />
              ) : null}
            </FlexBox>

            {/*Sub Menu*/}
            {el.child.length > 0 && showSubMenu && subMenuName === el.label
              ? el?.child?.map((item, index) => {
                  return (
                    <div css={subMenuStyle} key={index}>
                      <FlexBox
                        justify={'flex-start'}
                        padding={'10px 30px 10px 45px'}
                        onClick={() =>
                          handleClickMenu(item.label, item.path, true)
                        }
                      >
                        <ShortText
                          text={item.label}
                          color={'white'}
                          fontWeight={'bold'}
                          cursor={'pointer'}
                        />
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
