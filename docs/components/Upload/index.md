## Upload 文件上传

### 基本用法

```jsx
import React from 'react';
import { Upload } from 'mini-design';

export default () => {
  return (
    <>
      <Upload action="http://jsonplaceholder.typicode.com/users/1/albums" />
    </>
  );
};
```

### 文件列表

```jsx
import React from 'react';
import { Upload } from 'mini-design';

export default () => {
  const defaultFileList = [
    {
      uid: '1',
      name: 'xxx.png',
      size: 10,
      status: 'success',
    },
    {
      uid: '2',
      name: 'yyy.png',
      size: 20,
      status: 'error',
    },
  ];
  return (
    <>
      <Upload
        defaultFileList={defaultFileList}
        multiple={true}
        action="http://jsonplaceholder.typicode.com/users/1/albums"
      ></Upload>
    </>
  );
};
```

### 拖拽上传

```jsx
import React from 'react';
import { Upload } from 'mini-design';

export default () => {
  const defaultFileList = [
    {
      uid: '1',
      name: 'xxx.png',
      size: 10,
      status: 'success',
    },
  ];
  return (
    <>
      <Upload
        defaultFileList={defaultFileList}
        draggable={true}
        action="http://jsonplaceholder.typicode.com/users/1/albums"
      />
    </>
  );
};
```

### 自动上传

```jsx
import React from 'react';
import { Upload, Button } from 'mini-design';

export default function Demo() {
  const [value, setValue] = React.useState([]);
  const uploaderRef = React.useRef();

  const handleUpload = () => {
    uploaderRef.current.start();
  };

  return (
    <>
      <Upload
        value={value}
        autoUpload={false}
        action="//jsonplaceholder.typicode.com/posts/"
        onChange={setValue}
        ref={uploaderRef}
        auto={false}
      />
      <hr />
      <Button disabled={!value.length} onClick={handleUpload}>
        Start Upload
      </Button>
    </>
  );
}
```

<API src="../../../src/components/Upload/Upload.tsx" ></API>
