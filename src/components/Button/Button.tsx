import classNames from 'classnames';
import React, { FC } from 'react';

export type ButtonShape = 'circle' | 'round';
export type ButtonSize = 'lg' | 'sm' | 'md';
type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
  /**设置 Button 的class */
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  /**设置Button类型为link时使用 */
  href?: string;
  /**设置 Button 的形状 */
  shape?: ButtonShape;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    shape,
    ...restProps
  } = props;
  const classes = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    [`btn-${shape}`]: shape,
    disabled: disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
Button.displayName = 'Button';
Button.defaultProps = {
  btnType: 'default',
  disabled: false,
};
export default Button;
