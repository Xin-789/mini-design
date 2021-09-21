import React, {Fragment} from "react";
import Menu, { MenuItem, SubMenu } from "../../components/Menu/menu";
import Icon from "../../components/Icon/icon";
const MenuDemo = () => {
  return (
    <Fragment>
      <h1>horizontal</h1>
      <Menu mode={"horizontal"}  defaultIndex={"2"} onSelect={(index)=>{
        console.log(index)
      }}>
        <MenuItem icon={<Icon icon={'ad'} />}>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
        <SubMenu title="submenu">
          <MenuItem>菜单4-1</MenuItem>
          <MenuItem>菜单4-2</MenuItem>
          <MenuItem>菜单4-3</MenuItem>
        </SubMenu>
        <SubMenu title="submenu2">
          <MenuItem>菜单5-1</MenuItem>
          <MenuItem>菜单5-2</MenuItem>
        </SubMenu>
      </Menu>
      <h1>vertical</h1>
      <Menu mode={"vertical"} style={{width:"200px"}} defaultIndex={"3-1"} defaultOpenKeys={['3']} onSelect={(index)=>{
        console.log(index)
      }}>
        <MenuItem icon={<Icon icon={'ad'} />} >菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem disabled={true}>菜单3</MenuItem>
        <SubMenu  icon={<Icon icon={'ad'} />} title="submenu">
          <MenuItem  icon={<Icon icon={'ad'} />}>菜单4-1</MenuItem>
          <MenuItem>菜单4-2</MenuItem>
          <MenuItem>菜单4-3</MenuItem>
        </SubMenu>
        <SubMenu title="submenu2">
          <MenuItem>菜单5-1</MenuItem>
          <MenuItem>菜单5-2</MenuItem>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};
export default MenuDemo;
