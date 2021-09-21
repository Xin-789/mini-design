import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from './MenuItem';
import SubMenu, { SubMenuProps } from './SubMenu';
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  /**菜单className */
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  /**菜单style */
  style?: React.CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: SelectCallback;
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenKeys?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenKeys?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
    defaultOpenKeys,
  } = props;
  const [active, setActive] = useState(defaultIndex);
  const classes = classNames('my-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const menuContext: IMenuContext = {
    mode,
    defaultOpenKeys,
    index: active ? active : '0',
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem Component',
        );
      }
    });
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={menuContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenKeys: [],
};
export type { MenuItemProps, SubMenuProps };
export { MenuItem, SubMenu };
export default Menu;
