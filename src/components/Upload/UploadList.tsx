import React, { FC } from 'react';
import Progress from '@/components/Progress';
import Icon from '@/components/Icon/Icon';
import { UploadFileType } from './Upload';
import classNames from 'classnames';
interface UploadListProps {
  fileList: UploadFileType[];
  onRemove: (_file: UploadFileType) => void;
}
const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  const render = (file: UploadFileType) => {
    const { status, percent } = file;
    const show = status === 'uploading';
    const visibility = show ? 'visible' : 'hidden';
    const wrapStyle: React.CSSProperties = { visibility };
    return (
      <div className="my-upload-progress" style={wrapStyle}>
        <Progress percent={percent} showInfo={false} height={3} />
      </div>
    );
  };
  const renderFileItems = (file: UploadFileType) => {
    const { name, status } = file;
    const infoClass = classNames('my-upload-info', {
      'my-upload-info-error': status === 'error',
    });
    return (
      <>
        <div className={infoClass}>
          <div className="my-upload-info-text">
            <Icon icon="paperclip" />
          </div>
          <span className="my-upload-info-file-name">{name}</span>
          <div className="my-upload-info-actions">
            <Icon icon="trash-alt" onClick={() => onRemove(file)} />
          </div>
        </div>
      </>
    );
  };
  return (
    <ul className="my-upload">
      {fileList.map((item) => {
        return (
          <li className="my-upload-list-item" key={item.uid}>
            {renderFileItems(item)}
            {render(item)}
          </li>
        );
      })}
    </ul>
  );
};

UploadList.displayName = 'UploadList';
export default UploadList;
