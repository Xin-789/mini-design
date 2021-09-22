## AutoComplete 自动补全

### 基本用法

```tsx
import React from 'react';
import { AutoComplete } from 'mini-design';

const AutoCompleteDemo = () => {
  const renderMenuItem = (item) => {
    return (
      <h5>
        name:{item.value} id: {item.id}
      </h5>
    );
  };
  const handleFetch = (query) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item) => ({ ...item, value: item.login }));
      });
  };
  const handleSelect = (value) => {
    console.log('%c [ value ]', value);
  };
  return (
    <div style={{ margin: '40px auto', width: '400px' }}>
      <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={handleSelect}
        renderMenuItem={renderMenuItem}
      />
    </div>
  );
};
export default AutoCompleteDemo;
```

## API

| 属性             | 说明           | 类型                                                             | 默认值 | 版本 |
| ---------------- | -------------- | ---------------------------------------------------------------- | ------ | ---- |
| fetchSuggestions | 筛选事件       | ( str: string ) => DataSourceType[] \| Promise<DataSourceType[]> |        |      |
| onSelect         | 选择回调事件   | (item: DataSourceType) => void                                   |        |      |
| renderMenuItem   | 自定义渲染选项 | (item: DataSourceType) => React.ReactElement                     | -      |      |
