import React from 'react';
import { Loader, Button } from 'mini-design';
import './index.css';
export default () => {
  const [status, setStatus] = React.useState(false);
  return (
    <div>
      <Loader spinning={status}>
        <div className="example-2"></div>
      </Loader>
      <Button onClick={() => setStatus(!status)}>切换状态</Button>
    </div>
  );
};
