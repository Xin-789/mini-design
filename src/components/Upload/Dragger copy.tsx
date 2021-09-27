import React, { FC, useCallback, useState, DragEvent } from 'react';
import classNames from 'classnames';
interface DraggerProps {
  onClick?: (e: React.MouseEvent) => void;
}
const Dragger: FC<DraggerProps> = (props) => {
  const { onClick, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames('my-upload-dragger', {
    'is-dragover': dragOver,
  });
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {});
  }
  const handleDrag = useCallback((e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  }, []);
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
  };
  return (
    <div
      className={classes}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      <button>click and drop</button>
    </div>
  );
};
Dragger.displayName = 'Dragger';
export default Dragger;
