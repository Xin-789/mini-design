import React from 'react';
import { Icon, Button } from 'mini-design';
import './index.scss';
function Demo() {
  return (
    <div className="wrapper">
      <Button btnType="primary" disabled={true}>
        primary
      </Button>
      <Button btnType="danger" disabled>
        danger
      </Button>
      <Button btnType="link" disabled>
        link
      </Button>
      <Button btnType="circle" disabled>
        <Icon icon="ad" />
      </Button>
      <Button shape="round" disabled>
        <Icon icon="ad" />
      </Button>
    </div>
  );
}
export default () => <Demo />;
