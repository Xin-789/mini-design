## Upload

### 基本用法

```tsx
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

<API src="../../../src/components/Upload/Upload.tsx" ></API>
