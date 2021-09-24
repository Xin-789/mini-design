import React, { FC, isValidElement, ReactNode } from 'react';
import classNames from 'classnames';
export interface LoaderProps {
  /**	组件大小 */
  size?: 'sm' | 'md' | 'lg';
  /**当作为包裹元素时，可以自定义描述文案 */
  tip?: string;
  /**是否为加载中状态 */
  spinning?: boolean;
  /**自定义指示符 */
  customSpin: ReactNode;
  /**指示符的style */
  style?: React.CSSProperties;
  /**包装器的类名 */
  wrapClassName?: string;
}
const Loader: FC<LoaderProps> = (props) => {
  const { size, tip, customSpin, spinning, wrapClassName, style, children } =
    props;

  const spinClass = classNames('my-loader-spin', {
    [`my-loader-${size}`]: size,
  });
  const maskClass = classNames({
    'my-loader-mask': spinning,
  });
  const renderSpinElement = () => {
    if (customSpin === null) {
      return null;
    }
    if (isValidElement(customSpin)) {
      return React.cloneElement(customSpin, {
        className: classNames(customSpin.props.className, spinClass),
      });
    }
    return (
      <span className={spinClass} style={style}>
        <i className="my-loader-spin-dot"></i>
        <i className="my-loader-spin-dot"></i>
        <i className="my-loader-spin-dot"></i>
        <i className="my-loader-spin-dot"></i>
      </span>
    );
  };
  return (
    <div className={classNames('my-loader', wrapClassName)}>
      <div className="my-loader-content">
        {spinning && (
          <div className="my-loader-spin-wrapper">
            {renderSpinElement()}
            {tip && <div className="my-loader-text">{tip}</div>}
          </div>
        )}
      </div>

      <div className={maskClass}>{props.children}</div>
    </div>
  );
};
Loader.displayName = 'Loader';
Loader.defaultProps = {
  size: 'md',
  spinning: true,
};
export default Loader;
