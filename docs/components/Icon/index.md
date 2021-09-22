## Icon 图标

基于 FontAwesomeIcon 封装

### 基本用法

```tsx
import React from 'react';
import { Icon } from 'mini-design';
import './demo/index.scss';
export default () => (
  <>
    <div className="wrapper">
      <Icon icon="cat" />
      <Icon icon="crow" />
      <Icon icon="dove" />
      <Icon icon="dragon" />
      <Icon icon="feather" />
    </div>
  </>
);
```

### 旋转

```tsx
import React from 'react';
import { Icon } from 'mini-design';
import './demo/index.scss';
export default () => (
  <>
    <div className="wrapper">
      <Icon icon="campground" spin />
      <Icon icon="check-circle" spin />
      <Icon icon="clock" spin />
      <Icon icon="crosshairs" spin />
      <Icon icon="wine-bottle" spin />
      <Icon icon="mountain" spin />
    </div>
  </>
);
```

### 主题

```tsx
import React from 'react';
import { Icon } from 'mini-design';
import './demo/index.scss';
export default () => (
  <>
    <div className="wrapper">
      <Icon icon="biking" theme="primary" />
      <Icon icon="brush" theme="secondary" />
      <Icon icon="clone" theme="success" />
      <Icon icon="copy" theme="info" />
      <Icon icon="drafting-compass" theme="warning" />
      <Icon icon="fill" theme="light" />
      <Icon icon="tint" theme="dark" />
    </div>
  </>
);
```

<API src="../../../src/components/Icon/Icon.tsx" ></API>

更多图标: https://fontawesome.com/v5.15/icons?d=listing&p=3&m=free
