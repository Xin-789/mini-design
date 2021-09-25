import Icon from '../Icon';
import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
export interface ProgressProps {
  /**进度百分比 */
  percent?: number;
  /**是否显示文字 */
  showInfo?: boolean;
  /**进度状态 */
  status?: 'success' | 'fail' | 'active';
  /**线条颜色 */
  strokeColor?: string;
  /**线条高度 */
  height?: number;
  /**class名 */
  className?: string;
}
const STATUS_ICON = {
  fail: <Icon icon="times" />,
  success: <Icon icon="check" />,
  active: null,
};
const Progress: FC<ProgressProps> = (props) => {
  const { percent, showInfo, status, strokeColor, height, className } = props;
  const percentStyle = {
    width: `${percent}%`,
    backgroundColor: strokeColor,
    height: `${height}px`,
  };
  const finalStatus = useMemo(() => {
    if (percent === 100 && status !== 'fail') {
      return 'success';
    }
    return status;
  }, [percent, status]);
  const classes = classNames('my-progress', {
    className,
    [`my-progress-${finalStatus}`]: finalStatus,
  });

  /**渲染是否显示文字 */
  const renderInfo = () => {
    const showIcon = finalStatus && finalStatus !== 'active';
    finalStatus === 'fail';
    return (
      <div className="my-progress-info-text">
        {showIcon ? (
          <div className={`my-progress-status-${finalStatus}`}>
            {STATUS_ICON[finalStatus]}
          </div>
        ) : (
          `${percent}%`
        )}
      </div>
    );
  };
  return (
    <div className={classes}>
      <div className="my-progress-outer">
        <div className="my-progress-inner" style={{ height: `${height}px` }}>
          <div className="my-progress-bg" style={percentStyle}></div>
        </div>
      </div>
      {showInfo && renderInfo()}
    </div>
  );
};
Progress.displayName = 'Progress';
Progress.defaultProps = {
  percent: 0,
  showInfo: true,
};
export default Progress;
