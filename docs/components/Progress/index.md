## Progress 进度条

### 基本用法

```tsx
import React from 'react';
import { Progress } from 'mini-design';

export default () => {
  return (
    <>
      <Progress percent={0} />
      <Progress percent={30} status="active" />
      <Progress percent={100} status="success" />
      <Progress percent={70} status="fail" />
    </>
  );
};
```

### 动态展示

```tsx
import React from 'react';
import { Progress, Button } from 'mini-design';

export default () => {
  const [percent, setPercent] = React.useState(30);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };
  return (
    <>
      <Progress percent={percent} />
      <Button onClick={decline}>-</Button>
      <Button onClick={increase}>+</Button>
    </>
  );
};
```

### 自定义颜色

```tsx
import React from 'react';
import { Progress, Button } from 'mini-design';

export default () => {
  const [percent, setPercent] = React.useState(30);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };
  return (
    <>
      <Progress percent={percent} strokeColor={'rgb(255, 193, 7)'} />
      <Button onClick={decline}>-</Button>
      <Button onClick={increase}>+</Button>
    </>
  );
};
```

<API src="../../../src/components/Progress/Progress.tsx" ></API>
