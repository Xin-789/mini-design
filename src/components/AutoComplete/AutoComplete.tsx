import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Input from '../Input';
import { InputProps } from '../Input/input';
import Icon from '../Icon';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames';
import Transition from "../Transition";
import useClickOutside from '../../hooks/useClickOutSide';
export interface itemDataSource {
  value: string;
}
export type DataSourceType<T = {}> = T & itemDataSource;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /**筛选事件 */
  fetchSuggestions: ( str: string ) => DataSourceType[] | Promise<DataSourceType[]>;
  /**选择回调事件 */
  onSelect?: (item: DataSourceType) => void;
  /**自定义渲染选项 */
  renderMenuItem?: (item: DataSourceType) => React.ReactElement;
}
const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderMenuItem, ...restProps } =
    props;
  const [inputValue, setInputValue] = useState(value);
  const [loading, setLoading] = useState(false);
  const [sugestions, setSugestions] = useState<DataSourceType[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceValue = useDebounce(inputValue, 500);
  const triggerRef = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  useClickOutside(componentRef, () => {
    setSugestions([]);
  });
  useEffect(() => {
    if (debounceValue && triggerRef.current) {
      const result = fetchSuggestions(debounceValue);
      if (result instanceof Promise) {
        setLoading(true);
        result.then((data) => {
          setLoading(false);
          if (data.length > 0) {
            setShowDropdown(true);
          }
          setSugestions(data);
        });
      } else {
        setSugestions(result);
        if (result.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debounceValue, fetchSuggestions, setSugestions]);

  const handleKeyOownEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'Enter':
        if (sugestions[highlightIndex]) {
          handleItemSelect(sugestions[highlightIndex]);
        }
        break;
      case 'ArrowUp':
        if (highlightIndex > 0) {
          setHighlightIndex(highlightIndex - 1);
        }
        break;
      case 'ArrowDown':
        if (highlightIndex < sugestions.length - 1) {
          setHighlightIndex(highlightIndex + 1);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    triggerRef.current = true;
    setInputValue(value);
  };

  const handleSelect = useCallback(
    (item: DataSourceType) => {
      if (onSelect) {
        onSelect(item);
      }
    },
    [onSelect],
  );

  const handleItemSelect = useCallback(
    (item: DataSourceType) => {
      setInputValue(item.value);
      setSugestions([]);
      handleSelect(item);
      triggerRef.current = false;
    },
    [handleSelect],
  );

  const renderDropDown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSugestions([]);
        }}
      >
      <ul className={'dropdown-list'}>
        {loading && (
          <div className="dropdown-loading-icon">
            <Icon icon="spinner" spin />
          </div>
        )}
        {sugestions.map((item, index) => {
          const classAvtive = classNames('dropdown-item', {
            'is-active': index === highlightIndex,
          });
          return (
            <li
              key={index}
              className={classAvtive}
              onClick={() => {
                handleItemSelect(item);
              }}
            >
              {renderMenuItem ? renderMenuItem(item) : item.value}
            </li>
          );
        })}
      </ul>
      </Transition>
    );
  };

  return (
    <div className="my-auto-complete" ref={componentRef}>
      <Input
        {...restProps}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyOownEvent}
      />
      {renderDropDown()}
    </div>
  );
};
AutoComplete.defaultProps = {
  value: '',
};
AutoComplete.displayName = 'AutoComplete';
export default AutoComplete;
