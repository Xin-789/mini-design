import React from 'react';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
const AutoCompleteDemo = () => {
  //   const course = [
  //     "vue",
  //     "react",
  //     "html",
  //     "java",
  //     "javascript",
  //     "php",
  //     "css",
  //     "react-redux",
  //   ];
  //   const courseObject = [
  //     { value: "vue", id: "1" },
  //     { value: "react", id: "2" },
  //     { value: "java", id: "3" },
  //     { value: "javascript", id: "4" },
  //     { value: "react-redux", id: "5" },
  //   ];
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
