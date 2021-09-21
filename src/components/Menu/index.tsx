import { FC } from 'react'
import TransMenu, { MenuProps } from './Menu'
import SubMenu, { SubMenuProps } from './SubMenu'
import MenuItem, { MenuItemProps } from './MenuItem'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}
const Menu = TransMenu as IMenuComponent

Menu.Item = MenuItem
Menu.SubMenu = SubMenu

export default Menu