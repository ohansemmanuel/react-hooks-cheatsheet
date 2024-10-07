export const useDebugValueCode = `() => {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())

    const increment = () => {
        setCount(c => c + 1)
        setDate(new Date())
        useDebugValue({count, date})
    }
    const decrement = () => {
        setCount(c => c - 1)
        setDate(new Date())
        useDebugValue({count, date})
    }  
    
    return (
        <div>
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>Date: {date.toISOString()}</p>
                <p>Open React DevTools to see the debug values for the custom hooks.</p>
            </div>
        </div>
    );
}
`
