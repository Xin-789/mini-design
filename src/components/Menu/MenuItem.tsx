import React, {Fragment, useContext} from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  /**菜单项的key */
  index?: string;
  /**菜单项是否禁用 */
  disabled?: boolean;
  /**菜单项的className */
  className?: string;
  /**菜单项的style */
  style?: React.CSSProperties;
  /**菜单项Icon */
  icon?: React.ReactNode;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children, icon } = props;
  const menuContext = useContext(MenuContext);
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": menuContext.index === index,
  });
  const handleClick = () => {
    if (menuContext.onSelect && !disabled && typeof index === "string") {
      menuContext.onSelect(index);
    }
  };
  const renderChildren= () => {
    if (icon && React.isValidElement(icon)){
      return <Fragment>
        <span  className="menu-icon">{React.cloneElement(icon)}</span>
        <span className='menu-item-title'>{children}</span>
      </Fragment>
    }
    return   <span className='menu-item-title'>{children}</span>
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {renderChildren()}
    </li>
  );
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
