## Loader 加载中

### 基本用法

```tsx
import React from 'react';
import { Loader } from 'mini-design';

export default () => (
  <>
    <Loader />
  </>
);
```

### 各种大小

```tsx
import React from 'react';
import { Loader } from 'mini-design';

export default () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Loader size="sm" />
    <Loader size="md" />
    <Loader size="lg" />
  </div>
);
```

### 自定义描述文案

```tsx
import React from 'react';
import { Loader } from 'mini-design';

export default () => (
  <div>
    <Loader tip="loading..." />
  </div>
);
```

### 自定义指示符

```tsx
import React from 'react';
import { Loader, Icon } from 'mini-design';

export default () => (
  <div>
    <Loader tip="loading..." customSpin={<Icon icon="redo" />} />
  </div>
);
```

### 放入一个容器中

<code src="./demo/demo1.jsx" ></code>

### 把内容内嵌到 Spin 中

<code src="./demo/demo2.jsx" ></code>

<API src="../../../src/components/Loader/index.tsx" ></API>
