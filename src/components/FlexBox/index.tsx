import { FC } from 'react';
import FlexBox, { FlexboxProps } from './FlexBox';
import FlexItem, { FlexboxItemProps } from './FlexItem';
export type IFlexComponet = FC<FlexboxProps> & {
  Item: FC<FlexboxItemProps>;
};
const Flex = FlexBox as IFlexComponet;
Flex.Item = FlexItem;
export default Flex;
