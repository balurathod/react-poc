import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

    return(
        <>
            <h3>Count: {count}</h3>
            <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left" onClick={() => setCount(count + 1 )}>Increment</button>
            <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left" onClick={() => setCount(count - 1 )}>Decrement</button>
        </>
    )
}

export default  Counter;