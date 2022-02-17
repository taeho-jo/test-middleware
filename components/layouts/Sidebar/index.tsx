import React, { Fragment, useCallback, useState } from 'react';
import Link from 'next/link';
// Libraries
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
// Styles
import { css } from '@emotion/react';
import Button from '../../atoms/Button';
import FlexBox from '../../atoms/FlexBox';
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
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const handleChangeShowSubMenu = useCallback(() => {
    setShowSubMenu(prev => !prev);
  }, [showSubMenu]);

  return (
    <aside css={sidebarStyle(showSidebar)}>
      <FlexBox justify={'flex-end'} padding={'0'}>
        <Button onClick={onClick}>{showSidebar ? '닫기' : '열기'}</Button>
      </FlexBox>
      {MENU_LIST.map((el, index) => {
        return (
          <Fragment key={index}>
            <FlexBox justify={'space-between'} width={'80%'}>
              <Link href={el.path}>{el.label}</Link>
              {el.child.length > 0 && !showSubMenu ? (
                <MdOutlineKeyboardArrowUp
                  size={28}
                  cursor={'pointer'}
                  onClick={handleChangeShowSubMenu}
                />
              ) : el.child.length > 0 && showSubMenu ? (
                <MdOutlineKeyboardArrowDown
                  size={28}
                  cursor={'pointer'}
                  onClick={handleChangeShowSubMenu}
                />
              ) : null}
            </FlexBox>

            {/*Sub Menu*/}
            {el.child.length > 0 && showSubMenu
              ? el?.child?.map((item, index) => {
                  return (
                    <div css={subMenuStyle} key={index}>
                      <FlexBox
                        justify={'flex-start'}
                        padding={'10px 30px 10px 45px'}
                      >
                        <Link href={item.path}>{item.label}</Link>
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
