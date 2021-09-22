import React from 'react';
import { Badge, Button } from 'mini-design';
import './index.scss';
function BadgeContent() {
  return (
    <div className="prop-content">
      <Badge content={999}>
        <Button>新消息</Button>
      </Badge>

      <Badge content="NEW">
        <Button>新消息</Button>
      </Badge>
    </div>
  );
}
export default () => <BadgeContent />;
