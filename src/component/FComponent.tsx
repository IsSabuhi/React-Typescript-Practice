import React, { useEffect, useState } from 'react'

interface Props {
    name: string;
}

export default function FComponent(props: Props) {

    const [count, setCount] = useState(0);

    const handleIncrement = () =>
        setCount(count => count + 1);

    const handleDecrement = () =>
        setCount(count => count - 1);

    const handleReset = () =>
        setCount(count => count = 0);

    // useEffect(() => setCount ( count => count + 2) , [ ] ) ;    

  return (
    <div>
        <h1>Func component</h1>
        <h2>Hello, {props.name}</h2>
        <h3>Счётчик: {count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Сбросить</button>
    </div>
  )
}
