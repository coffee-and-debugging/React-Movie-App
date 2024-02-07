import React from 'react';

const PropExample = (props) => {


    const { GetValueFromChildComponent } = props;

    const handleClick = () => {
        const count = 5;
        GetValueFromChildComponent(count + 1);
    }




    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
export default PropExample;