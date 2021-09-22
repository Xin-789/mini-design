## Transition 动画

基于 react-transition-group 封装

### 基本用法

```tsx
import React from 'react';
import { Transition } from 'mini-design';
import './demo/demo.scss';
export default () => {
  const [direction, setDirection] = React.useState(false);
  const handleClick = () => {
    setDirection(!direction);
  };
  return (
    <>
      <button onClick={handleClick}>动画</button>
      <Transition
        wrapper={true}
        timeout={10000}
        in={direction}
        animation="zoom-in-top"
      >
        <div className="transition-demo"></div>
      </Transition>
      <Transition timeout={3000} in={direction} animation="zoom-in-left">
        <div className="transition-demo"></div>
      </Transition>
    </>
  );
};
```

<API></API>
