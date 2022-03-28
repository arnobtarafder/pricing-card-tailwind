import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = (props) => {
    return (
        <div>
        <p className='flex items-center'> <CheckCircleIcon className='w-4 h-4 text-green-600'> </CheckCircleIcon> {props.benefit} </p>

    </div>
    );
};

export default Benefit;