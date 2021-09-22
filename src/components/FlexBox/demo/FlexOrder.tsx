import React from 'react';
import { Flex } from 'mini-design';
import './index.scss';
function Demo() {
  return (
    <div className="flex-demo">
      <Flex>
        <Flex.Item colspan={6}>colspan={6}</Flex.Item>
        <Flex.Item colspan={6}>colspan={6}</Flex.Item>
        <Flex.Item colspan={6}>colspan={6}</Flex.Item>
        <Flex.Item colspan={6}>colspan={6}</Flex.Item>
      </Flex>
    </div>
  );
}
export default () => <Demo />;
