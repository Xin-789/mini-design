import React from 'react';
import { Button, Icon } from 'mini-design';
import './index.scss';
function Demo() {
  return (
    <div className="wrapper">
      <Button shape="circle">
        <Icon icon="ad" />
      </Button>
      <Button shape="circle" btnType="primary">
        <Icon icon="ad" />
      </Button>
      <Button shape="round">
        <Icon icon="ad" />
      </Button>
      <Button shape="round" btnType="primary">
        <Icon icon="ad" />
      </Button>
    </div>
  );
}
export default () => <Demo />;
