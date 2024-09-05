import React, { useMemo } from 'react';

const ExpensiveComponent = () => {
    const sum = () => {
        console.log("Calculating sum");
        let total = 0;
        for(let i = 0; i <= 100000000; i++){
            total += i;
        }
        return total;
    }

    const total = useMemo(() => sum(), []); 

    console.log(total);

    return (
        <div>
            <p>Sum: {total}</p>
        </div>
    )
}

export default ExpensiveComponent;
