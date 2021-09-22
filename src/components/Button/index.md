## Button 按钮

### 基本用法

```tsx
import React from 'react';
import { Button } from 'mini-design';

export default () => (
  <>
    <Button>Button</Button>
  </>
);
```

### 按钮尺寸

<code src="./demo/ButtonSize.tsx" ></code>

### 外观

<code src="./demo/ButtonType.tsx" ></code>

### 形状

<code src="./demo/ButtonShape.tsx" ></code>

### 禁用

<code src="./demo/ButtonDisabled.tsx" ></code>

## API

| 属性      | 说明                                                  | 类型                                         | 默认值    | 版本 |
| --------- | ----------------------------------------------------- | -------------------------------------------- | --------- | ---- |
| className | 设置 `Button` 的 class 名                             | string                                       |           |      |
| disabled  | 按钮失效状态                                          | boolean                                      | false     |      |
| href      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string                                       | -         |      |
| shape     | 设置按钮形状                                          | `circle` \| `round`                          | -         |      |
| size      | 设置按钮大小                                          | `lg` \| `md` \| `sm`                         | `md`      |      |
| btnType   | 设置按钮类型                                          | `primary` \| `default` \| `danger` \| `link` | `default` |      |
