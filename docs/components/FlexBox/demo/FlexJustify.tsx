import React from 'react';
import { Flex } from 'mini-design';
import './index.scss';
function Demo() {
  return (
    <div className="flex-demo">
      <h5>justify="start"</h5>
      <Flex justify="start">
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
      </Flex>
      <h5>justify="center"</h5>
      <Flex justify="center">
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
      </Flex>
      <h5>justify="end"</h5>
      <Flex justify="end">
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
      </Flex>
      <h5>justify="space-between"</h5>
      <Flex justify="space-between">
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
      </Flex>
      <h5>justify="space-around"</h5>
      <Flex justify="space-around">
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
        <Flex.Item colspan={4}>colspan={4}</Flex.Item>
      </Flex>
    </div>
  );
}
export default () => <Demo />;
