## Input 输入框

### 基本用法

```tsx
import React from 'react';
import { Input } from 'mini-design';

export default () => (
  <>
    <Input />
  </>
);
```

### 不同尺寸

```tsx
import React from 'react';
import { Input } from 'mini-design';
import './demo/demo.scss';
export default () => (
  <>
    <div className="wrapper">
      <Input placeholder="small" size="sm" />
      <Input placeholder="middle" size="md" />
      <Input placeholder="large" size="lg" />
    </div>
  </>
);
```

### 前置后置

```tsx
import React from 'react';
import { Input, Icon } from 'mini-design';

export default () => (
  <>
    <div className="wrapper">
      <Input prepend={<Icon icon="search" color={'#d9d9d9'} />} />
      <Input append={'@qq.com'} />
    </div>
  </>
);
```

### 禁止输入

```tsx
import React from 'react';
import { Input } from 'mini-design';
export default () => (
  <>
    <div className="wrapper">
      <Input disabled />
      <Input disabled append={'@qq.com'} />
    </div>
  </>
);
```

<API src="../../../src/components/Input/Input.tsx" ></API>
