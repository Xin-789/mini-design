
## Button 按钮

### 基本用法

```tsx
import React from 'react';
import { Button } from "mini-design";

export default () => <>
    <Button>Button</Button>
</>;
```

### 按钮尺寸

```tsx
import React from 'react';
import { Button } from "mini-design";

export default () => <>
    <Button size={"sm"} >Small</Button>
    <Button size={"md"}>Middle</Button>
    <Button size={"lg"}>Large</Button>
</>;
```
### 外观

```tsx
import React from 'react';
import { Button } from "mini-design";

export default () => <>
    <Button btnType="primary">primary</Button>
    <Button btnType="default">default</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link">link</Button>
</>;
```
### 形状

```tsx
import React from 'react';
import { Button, Icon } from "mini-design";

export default () => <>
    <Button shape="circle"><Icon icon="ad"/></Button>
    <Button shape="circle" btnType="primary"><Icon icon="ad"/></Button>
    <Button shape="round"><Icon icon="ad"/></Button>
    <Button shape="round" btnType="primary"><Icon icon="ad"/></Button>
</>;
```
### 禁用

```tsx
import React from 'react';
import { Button, Icon } from "mini-design";

export default () => <>
    <Button btnType="primary" disabled={true}>primary</Button>
    <Button btnType="danger" disabled>danger</Button>
    <Button btnType="link" disabled>link</Button>   
    <Button btnType="circle" disabled><Icon icon="ad"/></Button>
    <Button shape="round" disabled><Icon icon="ad"/></Button>
</>;
```

## API
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 设置 `Button` 的class名 | string |  |  |
| disabled | 按钮失效状态 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| shape | 设置按钮形状 | `circle` \| `round` | - |  |
| size | 设置按钮大小 | `lg` \| `md` \| `sm` | `md` |  |
| btnType | 设置按钮类型 | `primary` \| `default` \| `danger` \| `link`  | `default` |  |