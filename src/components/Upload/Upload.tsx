import React, {
  useRef,
  useCallback,
  FC,
  ChangeEvent,
  useState,
  isValidElement,
} from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import uid from './uid';
import UploadList from './UploadList';
import Dragger from './Dragger';
export type UploadItemStatus = 'ready' | 'uploading' | 'success' | 'error';
/**文件上传列表 */
export interface UploadItemProps {
  uid: string;
  size: number;
  name: string;
  percent?: number;
  status?: UploadItemStatus;
  file: File;
}

/**文件上传 */
export interface UploadProps {
  /**上传的地址 */
  action: string;
  /**发到后台的文件参数名 */
  name?: string;
  /**设置上传的请求头部 */
  headers?: { [key: string]: any };
  /**默认已经上传的文件列表 */
  defaultFileList?: UploadItemProps[];
  /**接受上传的文件类型 */
  accept?: string;
  /**是否支持多选文件	 */
  multiple?: boolean;
  /**是否禁用	 */
  disabled?: boolean;
  /**允许拖拽上传 */
  draggable?: boolean;

  /**上传进度发生变化的回调函数 */
  onProgress?: (percent: number, file: File) => void;
  /**上传出现错误的回调函数 */
  onError?: (error: Error, file: File) => void;
  /**上传成功后的回调函数 */
  onSuccess?: (response: Object, file: File) => void;
  /**上传队列发生改变的回调函数 */
  onChange?: (file: File) => void;
  /**上传文件之前，参数为上传的文件，若返回false则停止上传。支持返回一个Promise对象，Promise对象 reject 时则停止上传，resolve 时开始上传 */
  onBeforeUpload?: (file: File) => boolean | Promise<File>;
  /**点击移除文件时的回调 */
  onRemove?: (file: UploadItemProps) => void;
}

const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    name,
    headers,
    defaultFileList,
    accept,
    multiple,
    disabled,
    draggable,
    onError,
    onProgress,
    onSuccess,
    onChange,
    onBeforeUpload,
    onRemove,
    children,
  } = props;
  const [fileList, setFileList] = useState<UploadItemProps[]>(
    defaultFileList || [],
  );

  const inputFileRef = useRef<HTMLInputElement>(null);
  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) {
        return;
      }
      uploadFiles(files);
      if (inputFileRef.current) {
        inputFileRef.current.value = '';
      }
    },
    [onChange],
  );
  const updateFileList = useCallback(
    (
      updateFile: UploadItemProps,
      updateFileItems: Partial<UploadItemProps>,
    ) => {
      setFileList((oldFileList) => {
        return oldFileList.map((item) => {
          if (item.uid === updateFile.uid) {
            return { ...item, ...updateFileItems };
          }
          return item;
        });
      });
    },
    [],
  );
  const ajaxUpload = useCallback(
    (file: File) => {
      const _fileItem: UploadItemProps = {
        file,
        uid: uid(),
        size: file.size,
        name: file.name,
      };
      setFileList((oldFileList) => [_fileItem, ...oldFileList]);
      const formData = new FormData();
      formData.append(name || 'file', file);
      axios
        .post(action, formData, {
          headers: {
            ...headers,
            'Content-type': 'multipart/form-data',
          },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total) || 0;
            if (percent < 100) {
              updateFileList(_fileItem, {
                percent,
                status: 'uploading',
              });
              onProgress?.(percent, file);
            }
          },
        })
        .then((response) => {
          updateFileList(_fileItem, {
            status: 'success',
          });
          onSuccess?.(response.data, file);
        })
        .catch((error) => {
          updateFileList(_fileItem, {
            status: 'error',
          });
          onError?.(error, file);
        })
        .finally(() => {
          onChange?.(file);
        });
    },
    [action, headers, onChange, onSuccess, onError, onProgress],
  );

  const uploadFiles = useCallback(
    (files: FileList) => {
      Array.from(files).forEach((file) => {
        if (!onBeforeUpload) {
          ajaxUpload(file);
        } else {
          const result = onBeforeUpload(file);
          if (result && result instanceof Promise) {
            result.then((returnedFile) => {
              ajaxUpload(returnedFile);
            });
          } else if (result !== false) {
            ajaxUpload(file);
          }
        }
      });
    },
    [onBeforeUpload, ajaxUpload],
  );

  const handleClick = useCallback(() => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }, []);
  const buttonProps: React.HTMLAttributes<HTMLButtonElement> = {};
  if (!disabled) {
    buttonProps.onClick = handleClick;
  }
  const renderTrigger = () => {
    if (draggable) {
      return children ? (
        <Dragger
          disabled={disabled}
          onClick={handleClick}
          uploadFiles={uploadFiles}
        >
          {children}
        </Dragger>
      ) : (
        <Dragger
          disabled={disabled}
          onClick={handleClick}
          uploadFiles={uploadFiles}
        />
      );
    }
    if (isValidElement(children)) {
      return React.cloneElement(children, buttonProps);
    }
    return <Button {...buttonProps}>上传文件</Button>;
  };
  const handRemoveFile = (file: UploadItemProps) => {
    setFileList((oldList) => {
      return oldList.filter((item) => item.uid !== file.uid);
    });
    onRemove?.(file);
  };
  return (
    <div className="my-upload">
      <input
        type="file"
        hidden
        style={{ display: 'none' }}
        ref={inputFileRef}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
      />
      {renderTrigger()}

      <UploadList fileList={fileList} onRemove={handRemoveFile} />
    </div>
  );
};
Upload.displayName = 'Upload';
export default Upload;
