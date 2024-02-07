import React from 'react';
import PropExample from '../PropExample/PropExample';


const Child = () => {
    return (
        <div>its me arrow function! </div>
    );
};



function FunctionBasedComponent() {


    const GetValueFromChildComponent = (value) => {
        console.log(value);
    }






    return (
        <div>
            <Child />
            its me functional component!
            <PropExample GetValueFromChildComponent={GetValueFromChildComponent} />
        </div>
    );
};

export default FunctionBasedComponent;