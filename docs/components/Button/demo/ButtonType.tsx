import React from 'react';
import { Button } from 'mini-design';
import './index.scss';
export default () => (
  <div className="wrapper">
    <Button btnType="primary">primary</Button>
    <Button btnType="default">default</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link">link</Button>
  </div>
);
