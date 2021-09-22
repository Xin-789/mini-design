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

### 侧导航栏

```tsx
import React from 'react';
import { Menu, Icon } from 'mini-design';

export default () => (
  <>
    <Menu
      mode={'vertical'}
      defaultIndex={'2'}
      defaultOpenKeys={['4']}
      onSelect={(index) => {
        console.log(index);
      }}
    >
      <Menu.Item icon={<Icon icon={'feather'} />}>菜单1</Menu.Item>
      <Menu.Item icon={<Icon icon={'cat'} />}>菜单2</Menu.Item>
      <Menu.Item icon={<Icon icon={'minus-circle'} />}>菜单3</Menu.Item>
      <Menu.SubMenu icon={<Icon icon={'info-circle'} />} title="菜单4">
        <Menu.Item icon={<Icon icon={'info-circle'} />}>菜单4-1</Menu.Item>
        <Menu.Item icon={<Icon icon={'info-circle'} />}>菜单4-2</Menu.Item>
        <Menu.Item icon={<Icon icon={'info-circle'} />}>菜单4-3</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu icon={<Icon icon={'minus-circle'} />} title="菜单5">
        <Menu.Item icon={<Icon icon={'minus-circle'} />}>菜单5-1</Menu.Item>
        <Menu.Item icon={<Icon icon={'minus-circle'} />}>菜单5-2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
);
```

<API src="../../../src/components/Menu/Menu.tsx" ></API>
