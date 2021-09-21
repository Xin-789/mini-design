import React, { FC } from "react";
import classNames from "classnames";
export interface FlexboxItemProps {
  /**	栅格占位格数 */
  colspan?: number;
  /**栅格顺序，用于排序 */
  order?: number;
  /**class */
  className?: string;
}
const classPrefix = "my-flex-box-item";

const FlexItem: FC<FlexboxItemProps> = (props) => {
  const { colspan, order, className, ...restProps } = props;
  const classes = classNames(classPrefix, {
    [`${classPrefix}-${colspan}`]: colspan && colspan >= 0,
    [`${classPrefix}-order-${order}`]: order,
  });
  return <div {...restProps} className={classes}></div>;
};
FlexItem.defaultProps = {
  colspan: 0,
  order: 0,
};
export default FlexItem;
