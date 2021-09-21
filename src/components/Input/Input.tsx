import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type InputSize = "lg" | "sm" | "md";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**是否禁用 Input */
  disabled?: boolean;
 /**设置 input 大小，支持 lg | md | sm */
  size?: InputSize;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | React.ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | React.ReactElement;
}

const Input: FC<InputProps> = (props) => {
  const { disabled, size, prepend, append, style, ...restProps } = props;
  const classes = classNames("my-input", {
    [`my-input-size-${size}`]: size,
  });
  const groupClasses = classNames({
    'my-input-group': prepend || append,
    [`my-input-group-size-${size}`]: size && (prepend || append),
    "my-input-group-disabled": disabled,
  });

  return (
    <div className={groupClasses} style={style}>
      {prepend && (
        <div className="my-input-group-prepend">
          {prepend}
        </div>
      )}
      <input className={classes} disabled={disabled} {...restProps} />
      {append && (
        <div className="my-input-group-append">
          {append}
        </div>
      )}
    </div>
  );
};
Input.displayName = "Input";
export default Input;
