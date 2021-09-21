import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';
import { MenuContext } from './Menu';
import Icon from '../Icon';

export interface SubMenuProps {
  /**二级菜单项的key */
  index?: string;
  /**二级菜单项的className */
  className?: string;
  /**二级菜单项名 */
  title: string;
  /**二级菜单项的Icon */
  icon?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  className,
  children,
  title,
  icon,
}) => {
  const menuContext = useContext(MenuContext);
  const openedSubMenus = menuContext.defaultOpenKeys as Array<string>;
  const isOpenMenu = index ? openedSubMenus.includes(index) : false;
  const [open, setOpen] = useState(isOpenMenu);
  const isVertical = menuContext.mode === 'vertical';

  const classes = classNames('menu-item submenu', className, {
    'is-opened': open,
    'is-active': index && menuContext.index.includes(index),
  });
  const expandClasses = classNames('submenu-expand-icon', {
    'open-icon': open,
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };
  const hoverMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault();
    setOpen(toggle);
  };
  const hoverEvents = isVertical
    ? {}
    : {
        onMouseLeave: (e: React.MouseEvent) => hoverMouse(e, false),
        onMouseMove: (e: React.MouseEvent) => hoverMouse(e, true),
      };

  const clickEvents = isVertical
    ? {
        onClick: handleClick,
      }
    : {};

  const renderChildren = () => {
    const subClasses = classNames('my-submenu', {
      'is-opened': open,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childrenElement = child as FunctionComponentElement<MenuItemProps>;
      if (childrenElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childrenElement, {
          index: `${index}-${i}`,
        });
      }
    });
    return (
      <ul className={subClasses} {...hoverEvents}>
        {childrenComponent}
      </ul>
    );
  };
  const renderIcon = () => {
    if (icon) {
      return <span className="submenu-icon">{icon}</span>;
    }
    return null;
  };
  return (
    <li className={classes} {...hoverEvents}>
      <div className="submenu-item" {...clickEvents}>
        {renderIcon()}
        <span className="submenu-title"> {title}</span>
        {isVertical && (
          <i className={expandClasses}>
            <Icon icon={'angle-down'} />
          </i>
        )}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
