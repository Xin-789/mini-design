import React, {
  useRef,
  useCallback,
  FC,
  ChangeEvent,
  useState,
  isValidElement,
  useImperativeHandle,
  useReducer,
  forwardRef,
  ReactNode,
} from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import getUid from './uid';
import UploadList from './UploadList';
import Dragger from './Dragger';
export type UploadItemStatus = 'ready' | 'uploading' | 'success' | 'error';
/**文件上传列表 */
export interface UploadFileType {
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
  defaultFileList?: UploadFileType[];
  /**接受上传的文件类型 */
  accept?: string;
  /**是否支持多选文件	 */
  multiple?: boolean;
  /**是否禁用	 */
  disabled?: boolean;
  /**允许拖拽上传 */
  draggable?: boolean;
  /**是否自动上传 */
  auto?: boolean;
  children?: ReactNode;
  /**上传进度发生变化的回调函数 */
  onProgress?: (percent: number, file: UploadFileType) => void;
  /**上传出现错误的回调函数 */
  onError?: (error: Error, file: UploadFileType) => void;
  /**上传成功后的回调函数 */
  onSuccess?: (response: Object, file: UploadFileType) => void;
  /**上传队列发生改变的回调函数 */
  onChange?: (files: UploadFileType[]) => void;
  /**上传文件之前，参数为上传的文件，若返回false则停止上传。支持返回一个Promise对象，Promise对象 reject 时则停止上传，resolve 时开始上传 */
  onBeforeUpload?: (file: UploadFileType) => boolean | Promise<UploadFileType>;
  /**点击移除文件时的回调 */
  onRemove?: (file: UploadFileType) => void;
}
/**设置文件uid */
const setFile = (file: UploadFileType) => {
  const { uid } = file;
  return {
    ...file,
    uid: uid || getUid(),
  };
};

type ACTIONTYPE =
  | { type: 'push'; payload: UploadFileType[] }
  | { type: 'update'; payload: UploadFileType }
  | { type: 'remove'; payload: UploadFileType };

/**fileList的reducer */
function reducerFile(state: UploadFileType[], action: ACTIONTYPE) {
  switch (action.type) {
    case 'push':
      return [...action.payload, ...state];
    case 'update':
      return state.map((file) =>
        file.uid === action.payload.uid ? action.payload : file,
      );
    case 'remove':
      return state.filter((file) => file.uid !== action.payload.uid);
    default:
      throw new Error();
  }
}
/**定义fileList */
function useFileList(files: UploadFileType[] = []) {
  const filesRef = useRef<UploadFileType[]>(files.map((file) => setFile(file)));
  const [state, dispatch] = useReducer(reducerFile, filesRef.current);

  filesRef.current = state;
  const dispatchCallback = useCallback((action: ACTIONTYPE) => {
    dispatch(action);
  }, []);
  return [filesRef.current, dispatchCallback] as const;
}
const Upload = forwardRef((props: UploadProps, ref) => {
  const {
    action,
    name,
    headers,
    defaultFileList,
    accept,
    multiple,
    disabled,
    draggable,
    auto,
    onError,
    onProgress,
    onSuccess,
    onChange,
    onBeforeUpload,
    onRemove,
    children,
  } = props;
  const [fileList, dispatch] = useFileList(defaultFileList);

  const inputFileRef = useRef<HTMLInputElement>(null);

  // 上传一个文件
  const ajaxUpload = useCallback(
    (file: UploadFileType) => {
      const formData = new FormData();
      formData.append(name || 'file', file.file);

      axios
        .post(action, formData, {
          headers: {
            ...headers,
            'Content-type': 'multipart/form-data',
          },
          //上传中状态
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total) || 0;
            if (percent < 100) {
              dispatch({
                type: 'update',
                payload: {
                  ...file,
                  percent,
                  status: 'uploading',
                },
              });
              onProgress?.(percent, file);
            }
          },
        })
        .then((response) => {
          dispatch({
            type: 'update',
            payload: {
              ...file,
              status: 'success',
              percent: 100,
            },
          });

          onSuccess?.(response.data, file);
        })
        .catch((error) => {
          dispatch({
            type: 'update',
            payload: {
              ...file,
              status: 'error',
              percent: 100,
            },
          });

          onError?.(error, file);
        });
    },
    [action, headers, dispatch, onChange, onSuccess, onError, onProgress],
  );

  const uploadFiles = useCallback(() => {
    Array.from(fileList).forEach((file) => {
      //检验上传前的状态
      const checkState = onBeforeUpload?.(file);
      if (checkState && checkState instanceof Promise) {
        checkState.then((responseFile) => {
          ajaxUpload(responseFile);
        });
      } else if (checkState === false) {
        return;
      }

      if (file.status === 'ready') {
        ajaxUpload(file);
      }
    });
  }, [onBeforeUpload, ajaxUpload, fileList]);
  /**改变文件时 */
  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> & React.DragEvent<HTMLElement>) => {
      const files = e?.target.files || e?.dataTransfer.files;
      if (!files) {
        return;
      }
      const newFileList: UploadFileType[] = [];
      Array.from(files).forEach((file: File) => {
        const _file: UploadFileType = {
          file,
          uid: getUid(),
          size: file.size,
          name: file.name,
          status: 'ready',
        };
        newFileList.push(_file);
      });

      const nextFileList = [...newFileList, ...fileList];
      dispatch({ type: 'push', payload: newFileList });
      onChange?.(nextFileList);
      auto && uploadFiles();
      if (inputFileRef.current) {
        inputFileRef.current.value = '';
      }
    },
    [onChange, uploadFiles, dispatch],
  );
  /**点击上传 */
  const handleClick = useCallback(() => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }, []);
  const buttonProps: React.HTMLAttributes<HTMLButtonElement> = {};
  if (!disabled) {
    buttonProps.onClick = handleClick;
  }
  /**渲染上传区域 */
  const renderTrigger = () => {
    if (draggable) {
      return (
        <Dragger
          disabled={disabled}
          onClick={handleClick}
          onChange={handleFileChange}
          uploadFiles={uploadFiles}
        >
          {children}
        </Dragger>
      );
    }
    if (isValidElement(children)) {
      return React.cloneElement(children, buttonProps);
    }
    return <Button {...buttonProps}>上传文件</Button>;
  };
  const handRemoveFile = useCallback(
    (file: UploadFileType) => {
      dispatch({ type: 'remove', payload: file });
      onRemove?.(file);
    },
    [onRemove, dispatch],
  );
  // 公共api
  const start = (file?: UploadFileType) => {
    if (file) {
      ajaxUpload(file);
      return;
    }
    uploadFiles();
  };
  useImperativeHandle(ref, () => ({
    start,
  }));
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
});

Upload.displayName = 'Upload';
export default Upload;
