import React from "react";
import Flex from "../../components/Flex/Flex";
import FlexItem from "../../components/Flex/FlexItem";
import "./index.scss";
const FlexDemo = () => {
  return (
    <div className="flex-demo">
      <h4>默认</h4>
      <Flex align="middle">
        <FlexItem colspan={6}>colspan={6}</FlexItem>
        <FlexItem colspan={6}>colspan={6}</FlexItem>
        <FlexItem colspan={6}>colspan={6}</FlexItem>
        <FlexItem colspan={6}>colspan={6}</FlexItem>
      </Flex>
      <h4>布局</h4>
      <h5>justify="start"</h5>
      <Flex justify="start">
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
      </Flex>
      <h5>justify="center"</h5>
      <Flex justify="center">
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
      </Flex>
      <h5>justify="end"</h5>
      <Flex justify="end">
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
      </Flex>
      <h5>justify="space-between"</h5>
      <Flex justify="space-between">
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
      </Flex>
      <h5>justify="space-around"</h5>
      <Flex justify="space-around">
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
        <FlexItem colspan={4}>colspan={4}</FlexItem>
      </Flex>
      <h4>对齐排列</h4>
      <h5>align="top"</h5>
      <Flex align="top">
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 1 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 2 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 3 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 4 }}>colspan={6}</div>
        </FlexItem>
      </Flex>

      <h5>align="middle"</h5>
      <Flex align="middle">
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 1 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 2 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 3 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 4 }}>colspan={6}</div>
        </FlexItem>
      </Flex>

      <h5>align="bottom"</h5>
      <Flex align="bottom">
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 1 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 2 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 3 }}>colspan={6}</div>
        </FlexItem>
        <FlexItem colspan={6}>
          <div style={{ lineHeight: 4 }}>colspan={6}</div>
        </FlexItem>
      </Flex>
      <h5>排序order</h5>
      <Flex>
        <FlexItem colspan={4} order={4}>
          order={4}
        </FlexItem>
        <FlexItem colspan={4} order={3}>
          order={3}
        </FlexItem>
        <FlexItem colspan={4} order={2}>
          order={2}
        </FlexItem>
        <FlexItem colspan={4} order={1}>
          order={1}
        </FlexItem>
      </Flex>
    </div>
  );
};
export default FlexDemo;
