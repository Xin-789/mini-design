import React from "react";
import Flex from "../../components/Flex/Flex";
import FlexItem from "../../components/Flex/FlexItem";
import Icon from "../../components/Icon/icon";
// import Input from "../../components/input/input";
const InputDemo = () => {
    const iconElement=<Icon icon="search" color={"#d9d9d9"} />
  return (
    <Flex className="demo">
      {/* <FlexItem colspan="24">
        <Input placeholder="2323" size="sm" />
      </FlexItem>
      <FlexItem colspan="24">
        <Input placeholder="2323" size="md" />
      </FlexItem>
      <FlexItem colspan="24">
        <Input placeholder="2323" size="lg" />
      </FlexItem>
      <FlexItem colspan="24">
        <Input size="sm" prepend={iconElement} append={iconElement} />
      </FlexItem>
      <FlexItem colspan="24">
        <Input prepend={iconElement} />
      </FlexItem>
      <FlexItem colspan="24">
        <Input size="lg" prepend={iconElement} />
      </FlexItem>
     */}
    </Flex>
  );
};
export default InputDemo;
