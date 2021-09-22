import React, { FC } from "react";
import classNames from "classnames";
export type StatusProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "light"
  | "dark";
export interface BadgePorps {
  color?: StatusProps;
  content?: React.ReactNode | number | string;
  maxCount?: number;
}
const Badge: FC<BadgePorps> = (props) => {
  const {
    color,
    content: contentText,
    maxCount = 99,
    children,
    ...restProps
  } = props;
  const colorStyle = color ? color : ""
  const classes = classNames("my-badge", {
    "my-badge-independent": !children,
    "my-badge-wrapper": children,
    [`my-badge-${colorStyle}`]: color,
  });
  const content =
    typeof contentText === "number" && contentText > maxCount
      ? `${maxCount}+`
      : contentText;
  
  if (!children) {
    return (
      <div className={classes} {...restProps}>
        {content}
      </div>
    );
  }
  return <div className={classes}  {...restProps}>
    {children}
    <div className="my-badge-content">{content}</div>
  </div>;
};
Badge.displayName = 'Badge'
export default Badge;
