import React, {
  FC,
  useCallback,
  useState,
  DragEvent,
  ChangeEvent,
} from 'react';
import classNames from 'classnames';
interface DraggerProps {
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  uploadFiles: (file: FileList) => void;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> & DragEvent<HTMLElement>,
  ) => void;
}
const Dragger: FC<DraggerProps> = (props) => {
  const { onClick, uploadFiles, onChange, disabled, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames('my-upload-dragger', {
    'is-dragover': dragOver,
  });
  const dragProps: React.HTMLAttributes<HTMLElement> = {};

  const handleDrag = useCallback(
    (e: DragEvent<HTMLElement>, over: boolean) => {
      e.preventDefault();
      setDragOver(over);
    },
    [uploadFiles],
  );
  const handleDrop = useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      setDragOver(false);
      onChange?.(e as ChangeEvent<HTMLInputElement> & DragEvent<HTMLElement>);
    },
    [onChange],
  );

  if (!disabled) {
    dragProps.onDragOver = (e) => {
      handleDrag(e, true);
    };
    dragProps.onDragLeave = (e) => {
      handleDrag(e, false);
    };
    dragProps.onClick = onClick;
    dragProps.onDrop = handleDrop;
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...dragProps });
  }
  return (
    <div className={classes} {...dragProps}>
      <div>Click or drag file to this area to upload</div>
    </div>
  );
};
Dragger.displayName = 'Dragger';
export default Dragger;
