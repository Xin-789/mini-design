import React, { FC } from "react";
import classNames from "classnames";

export interface FlexboxProps {
  /**对齐方式 */
  align?: "top" | "middle" | "bottom";
   /**水平排列方式 */
  justify?: "start" | "end" | "center" | "space-between" | "space-around";
   /**class */
  className?: string;
}
const classPrefix = "my-flex-box";
const FlexBox: FC<FlexboxProps> = (props) => {
  const { align, justify, className, ...restProps } = props;
  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-${align}`]: align,
    [`${classPrefix}-${justify}`]: justify,
  });
  return <div className={classes} {...restProps}></div>;
};
FlexBox.defaultProps = {
  align: "top",
  justify: "start",
};
FlexBox.displayName = "FlexBox";
export default FlexBox;
