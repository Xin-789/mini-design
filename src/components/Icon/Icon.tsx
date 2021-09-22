import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' |'light'|'dark' ;
export interface IconProps extends FontAwesomeIconProps{
    /**主题色 */
    theme?:ThemeProps;
    /**是否旋转 */
    spin?: boolean;

}
const Icon:React.FC<IconProps> = ({theme, className, spin,  ...restProps}) =>{
        const classes = classNames('my-icon', className, {
            [`icon-${theme}`]: theme,
            'spin': spin
            }
        )
        return (
            <FontAwesomeIcon className={classes} {...restProps} />
        )
}

export default Icon