import React from "react";
import Icon from "../../components/Icon/icon";
const IconDemo = () => {
    return <>
        <Icon  icon="ad" size={'2x'}  />
        <Icon  icon="arrow-alt-circle-down"  size={'2x'} theme="secondary" />
        <Icon  icon="coffee"  size={'2x'} theme="secondary" />
        <Icon  icon="snowboarding" rotation={90}   size={'2x'} theme="success" />

    </>
}
export default IconDemo