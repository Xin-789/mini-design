import React, { FC, useCallback, useRef } from "react";
import classNames from "classnames";
import { contains } from "./utils";

export interface CharacterProps {
  status: 0 | 0.5 | 1;
  disabled?: boolean;
  onClick?: (key: string, event: React.MouseEvent) => void;
  onMouseMove?: (key: string, event: React.MouseEvent) => void;
}
const classPrefix = "my-rate-character";
const characterStatus = {
  0: "empty",
  0.5: "half",
  1: "full",
};
const Chartacter: FC<CharacterProps> = (props) => {
  const {
    status,
    disabled,
    onMouseMove,
    onClick,
    children,
    ...restProps
  } = props;
  const classes = classNames(classPrefix, {
    [`${classPrefix}-${characterStatus[status]}`]: status,
  });
  let beforeRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;
      const getKey = contains(beforeRef.current, event.target);
      const key = getKey ? "before" : "after";
      onMouseMove?.(key, event);
    },
    [disabled, onMouseMove]
  );
  
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;
      const getKey = contains(beforeRef.current, event.target);
      const key = getKey ? "before" : "after";
      onClick?.(key, event);
    },
    [disabled, onClick]
  );
  return (
    <li
      onMouseMove={handleMouseMove}
      className={classes}
      onClick={handleClick}
      {...restProps}
    >
      <div ref={beforeRef} className={`${classPrefix}-before`}>
        {children}
      </div>
      <div className={`${classPrefix}-after`}>{children}</div>
    </li>
  );
};
Chartacter.displayName = "Chartacter";
export default Chartacter;
