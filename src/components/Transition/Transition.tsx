import React from "react";
import {CSSTransition} from "react-transition-group";
import {CSSTransitionProps} from "react-transition-group/CSSTransition";

type Animation = "zoom-in-top" | "zoom-in-right" | "zoom-in-bottom" | "zoom-in-left"
type TransitionProps = CSSTransitionProps & {
    /**动画名 */
    animation?: Animation,
    /**是否是外层包装 */
    wrapper?: boolean
}
const Transition: React.FC<TransitionProps> = (props) => {
    const {animation, wrapper, classNames, children, ...restProps} = props;
    return <CSSTransition
        classNames={classNames ? classNames : animation}
        {...restProps}
    >
        {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
}
Transition.defaultProps = {
    unmountOnExit:true,
    appear: true
}
export default Transition