import React from 'react';
import { Button } from 'mini-design';
import './index.scss';
function Demo() {
  return (
    <div className="wrapper">
      <Button size={'sm'}>Small</Button>
      <Button size={'md'}>Middle</Button>
      <Button size={'lg'}>Large</Button>
    </div>
  );
}
export default () => <Demo />;
