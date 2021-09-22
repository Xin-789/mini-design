## Menu 菜单

### 导航栏

```tsx
import React from 'react';
import { Menu, Icon } from 'mini-design';

export default () => (
  <>
    <Menu
      mode={'horizontal'}
      defaultIndex={'2'}
      onSelect={(index) => {
        console.log(index);
      }}
    >
      <Menu.Item icon={<Icon icon={'feather'} />}>菜单1</Menu.Item>
      <Menu.Item>菜单2</Menu.Item>
      <Menu.Item>菜单3</Menu.Item>
      <Menu.SubMenu title="多级菜单">
        <Menu.Item>菜单4-1</Menu.Item>
        <Menu.Item>菜单4-2</Menu.Item>
        <Menu.Item>菜单4-3</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="多级菜单2">
        <Menu.Item>菜单5-1</Menu.Item>
        <Menu.Item>菜单5-2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
);
```

### 导航栏

```tsx
import React from 'react';
import { Menu, Icon } from 'mini-design';

export default () => (
  <>
    <Menu
      mode={'vertical'}
      defaultIndex={'2'}
      onSelect={(index) => {
        console.log(index);
      }}
    >
      <Menu.Item icon={<Icon icon={'feather'} />}>菜单1</Menu.Item>
      <Menu.Item icon={<Icon icon={'cat'} />}>菜单2</Menu.Item>
      <Menu.Item icon={<Icon icon={'dove'} />}>菜单3</Menu.Item>
      <Menu.SubMenu icon={<Icon icon={'dragon'} />} title="多级菜单1">
        <Menu.Item>菜单4-1</Menu.Item>
        <Menu.Item>菜单4-2</Menu.Item>
        <Menu.Item>菜单4-3</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu icon={<Icon icon={'crow'} />} title="多级菜单2">
        <Menu.Item>菜单5-1</Menu.Item>
        <Menu.Item>菜单5-2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
);
```

<API></API>
