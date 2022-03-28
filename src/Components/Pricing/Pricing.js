import React from 'react';
// import PricingOption from '../PricingOption/PricingOption';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
        const PricingOptions = [
            {id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free', 
                'unlimited deals', 
                'localized deals', 
                'fantastic deals',
                'crazy deals'
            ]},
            {id: 2, name: 'Regular', price: 9.99, benefits: [
                'everything on free', 
                'unlimited deals', 
                'localized deals', 
                'fantastic deals',
                'crazy deals'
            ]},
            {id: 3, name: 'Premium', price: 19.99, benefits: [
                'everything on Regular', 
                'unlimited deals', 
                'localized deals', 
                'fantastic deals',
                'crazy deals'
            ]},
        ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-3xl font-mono text-yellow-50'>You are lucky</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
            {/* {
                    PricingOption.map(option => <PricingOption
                    key = {option.id}
                    option = {option}
                    ></PricingOption> )
                } */}
                
                {
                    PricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >
                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;