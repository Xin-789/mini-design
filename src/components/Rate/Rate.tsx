import classNames from "classnames";
import React, { FC, useCallback, useEffect, useState } from "react";
import Icon from "../Icon";
import Chartacter from "./Character";
import {
  CharacterType,
  transformCharacterMapToValue,
  transformValueToCharacterMap,
} from "./utils";
type SizePorps = "lg" | "md" | "sm" | "xs";
export interface RateProps {
  /**是否支持半选 */
  allowHalf?: boolean;
  /**自定义字符 */
  character?: React.ReactNode;
  /**设置组件尺寸 */
  size?: SizePorps;
  /**最大分数 */
  max?: number;
  /**设置值 受控 */
  value?: number;
  /**默认值 */
  defaultValue?: number;
  /**是否禁用，为 true 时无法进行交互 */
  disabled?: boolean;
  /**是否只读，为 true 时无法进行交互 */
  readonly?: boolean;
  /**value 发生改变时的回调函数 */
  onChange?: (value: number) => void;
  /**鼠标经过时数值变化的回调 */
  onHoverChange?: (value: number, event: React.SyntheticEvent) => void;
}
const classPrefix = "my-rate";

const Rate: FC<RateProps> = (props) => {
  const {
    allowHalf = false,
    character,
    size,
    max = 5,
    disabled,
    readonly,
    defaultValue = 0 ,
    value: valueProp ,
    onHoverChange,
    onChange,
    ...restProps
  } = props;
  const initValue = valueProp ? valueProp : defaultValue
  const [value, setValue] = useState(  initValue  );

  const getCharacterMap = useCallback(
    (v?: number) => {
      return transformValueToCharacterMap(
        typeof v !== "undefined" ? v : value,
        max,
        allowHalf
      );
    },
    [allowHalf, max, value]
  );

  const [characterMap, setCharacterMap] = useState<CharacterType[]>(
    getCharacterMap()
  );
  const classes = classNames(classPrefix, {
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-readonly`]: readonly,
    [`${classPrefix}-${size}`]: size,
  });

  useEffect(() => {
    setCharacterMap(getCharacterMap());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueProp]);
  const resetCharacterMap = useCallback(() => {
    setCharacterMap(getCharacterMap());
  }, [getCharacterMap]);
  const handleChangeCharacterMap = useCallback(
    (index: number, event: React.MouseEvent, key: string) => {
      const nextCharacterMap = characterMap.map((_item, i) => {
        if (i === index && key === "before" && allowHalf) {
          return 0.5;
        }
        return index >= i ? 1 : 0;
      });
      // TODO
      // 可以优化
      setCharacterMap(nextCharacterMap);
      onHoverChange?.(transformCharacterMapToValue(nextCharacterMap), event);
    },
    [allowHalf, characterMap, onHoverChange]
  );
  const handleMouseLeave = useCallback(
    (event: React.SyntheticEvent) => {
      resetCharacterMap();
      onHoverChange?.(value, event);
    },
    [resetCharacterMap, value, onHoverChange]
  );
  const handleChangeValue = useCallback(
    (index: number, event: React.MouseEvent) => {
      const nextValue = transformCharacterMapToValue(characterMap);
      if (nextValue !== value) {
        setValue(nextValue);
        setCharacterMap(getCharacterMap(nextValue));
        onChange?.(nextValue);
      }
    },
    [characterMap, getCharacterMap, setCharacterMap, setValue, value, onChange]
  );
  const handleClick = useCallback(
    (index: number, event: React.MouseEvent, key: string) => {
      handleChangeCharacterMap(index, event, key);
      handleChangeValue(index, event);
    },
    [handleChangeCharacterMap, handleChangeValue]
  );
  return (
    <ul {...restProps} className={classes} onMouseLeave={handleMouseLeave}>
      {characterMap.map((item, index) => {
        return (
          <Chartacter
            key={index}
            status={item}
            disabled={disabled || readonly}
            onClick={(key, event) => handleClick(index, event, key)}
            onMouseMove={(key, event) =>
              handleChangeCharacterMap(index, event, key)
            }
          >
            {character}
          </Chartacter>
        );
      })}
    </ul>
  );
};

Rate.defaultProps = {
  character:  <Icon icon={"star"} />,
  defaultValue: 0,
  max: 5,
  size: 'md'
}
Rate.displayName = "Rate";
export default Rate;
