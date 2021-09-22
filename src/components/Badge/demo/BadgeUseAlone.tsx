import React from 'react';
import { Badge, Button } from 'mini-design';
import './index.scss';
export default () => (
  <div className="prop-content">
    <Badge />
    <Badge style={{ background: '#4caf50' }} />
    <Badge content="99+" />
    <Badge content="NEW" />
  </div>
);
