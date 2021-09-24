import React, { FC, isValidElement, ReactNode } from 'react';
import classNames from 'classnames';
export interface LoaderProps {
  /**	组件大小 */
  size?: 'sm' | 'md' | 'lg';
  /**当作为包裹元素时，可以自定义描述文案 */
  tip?: string;
  /**是否为加载中状态 */
  spinning?: boolean;
  customSpin: ReactNode;
  style?: React.CSSProperties;
  wrapClassName?: string;
}
const Loader: FC<LoaderProps> = (props) => {
  const { size, tip, customSpin, spinning, wrapClassName, style, children } =
    props;

  console.log(
    '%c [ size ]',
    'font-size:13px; background:pink; color:#bf2c9f;',
    size,
  );
  const classes = classNames('my-loader-spin', {
    [`my-loader-${size}`]: size,
  });
  const renderSpinElement = () => {
    if (customSpin === null) {
      return null;
    }
    if (isValidElement(customSpin)) {
      return React.cloneElement(customSpin, {
        className: classNames(customSpin.props.className, classes),
      });
    }
    return (
      <span className={classes} style={style}>
        <i className="my-loader-spin-dot"></i>
        <i className="my-loader-spin-dot"></i>
        <i className="my-loader-spin-dot"></i>
        <i className="my-loader-spin-dot"></i>
      </span>
    );
  };
  return (
    <div className={classNames('my-loader', wrapClassName)}>
      {spinning && (
        <div className="my-loader-spin-wrapper">
          {renderSpinElement()}
          {tip && <div className="my-loader-text">{tip}</div>}
        </div>
      )}
    </div>
  );
};
Loader.displayName = 'Loader';
Loader.defaultProps = {
  size: 'md',
  spinning: true,
  //   customSpin: <Icon icon="redo" />,
};
export default Loader;
