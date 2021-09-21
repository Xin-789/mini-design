import React from 'react'
import Icon from '../../components/Icon/icon';
import Rate from '../../components/Rate/Rate'
function RateDemo() {
    const [value, setValue] = React.useState(2.5);
    const handleChange = (value) => {
      setValue(value);
    };
    return (
        <div>
            <Rate size="lg"/>
            <Rate allowHalf  character="👍" defaultValue={4} />
            <Rate allowHalf  value={value} defaultValue={3} character="A" onChange={handleChange} />
            <Rate allowHalf  value={value} defaultValue={2} character={<Icon  icon={'ad'} />} onChange={handleChange} />
        </div>
    )
}

export default RateDemo
