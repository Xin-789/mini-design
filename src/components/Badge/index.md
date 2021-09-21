
## Badge 徽标数

### 基本用法

```tsx
import React from 'react';
import { Badge, Button } from "mini-design";
export default () => <>
    <Badge>
        <Button>消息</Button>
    </Badge>
</>;
```

### 附加内容

```tsx
import React from 'react';
import { Badge, Button } from "mini-design";
export default () => <>
    <Badge content={999}>
      <Button>新消息</Button>
    </Badge>

    <Badge content="NEW">
      <Button>新消息</Button>
    </Badge>
</>;
```


### 独立使用

```tsx
import React from 'react';
import { Badge, Button } from "mini-design";
export default () => <>
    <Badge />
    <Badge style={{ background: '#4caf50' }} />
    <Badge content="99+" />
    <Badge content="NEW" />
</>;
```

## API
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 设置 `Button` 的class名 | `primary` \| `secondary` \| `success` \| `info` \| `warning` \| `light` \| `dark` |  |
| content | 内容 | string,number,React.Node |  |  |
| maxCount | 最大计数（仅当 content 为 number 类型时有效） | number | 99 |  |
