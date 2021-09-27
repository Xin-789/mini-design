import React, { FC, useCallback, useState, DragEvent } from 'react';
import classNames from 'classnames';
interface DraggerProps {
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  uploadFiles: (file: FileList) => void;
}
const Dragger: FC<DraggerProps> = (props) => {
  const { onClick, uploadFiles, disabled, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames('my-upload-dragger', {
    'is-dragover': dragOver,
  });
  const divProps: React.HTMLAttributes<HTMLElement> = {};

  const handleDrag = useCallback(
    (e: DragEvent<HTMLElement>, over: boolean) => {
      e.preventDefault();
      setDragOver(over);
    },
    [uploadFiles],
  );
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    uploadFiles(e.dataTransfer.files);
  };

  if (!disabled) {
    divProps.onClick = onClick;
    divProps.onDragOver = (e) => {
      handleDrag(e, true);
    };
    divProps.onDragLeave = (e) => {
      handleDrag(e, false);
    };
    divProps.onDrop = handleDrop;
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {});
  }
  return (
    <div className={classes} {...divProps}>
      <div>Click or drag file to this area to upload</div>
    </div>
  );
};
Dragger.displayName = 'Dragger';
export default Dragger;
