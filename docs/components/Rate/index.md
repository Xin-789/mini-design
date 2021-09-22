## Rate 评分

### 基本用法

```tsx
import React from 'react';
import { Rate } from 'mini-design';
import './demo/demo.scss';
export default () => (
  <>
    <Rate />
  </>
);
```

### 不同尺寸

```tsx
import React from 'react';
import { Rate } from 'mini-design';

export default () => (
  <>
    <Rate size="sm" />
    <Rate size="md" />
    <Rate size="lg" />
  </>
);
```

### 自定义

```tsx
import React from 'react';
import { Rate, Icon } from 'mini-design';

export default () => (
  <>
    <Rate character="👍" defaultValue={2} />
    <Rate character={<Icon icon={'dragon'} />} defaultValue={2} />
    <Rate character="A" defaultValue={2} />
  </>
);
```

### 支持半选

```tsx
import React from 'react';
import { Rate, Icon } from 'mini-design';

export default () => (
  <>
    <Rate allowHalf character="👍" defaultValue={2} />
    <Rate allowHalf character={<Icon icon={'dragon'} />} defaultValue={2} />
    <Rate allowHalf character="A" defaultValue={2} />
  </>
);
```

### 禁用

```tsx
import React from 'react';
import { Rate, Icon } from 'mini-design';

export default () => (
  <>
    <Rate disabled defaultValue={2} />
  </>
);
```

### 只读

```tsx
import React from 'react';
import { Rate, Icon } from 'mini-design';

export default () => (
  <>
    <Rate readonly defaultValue={2} />
  </>
);
```

<API src="../../../src/components/Rate/Rate.tsx" ></API>
