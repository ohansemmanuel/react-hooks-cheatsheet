const Starter = `
const App = () => {
    const [age, setAge] = useState(99)
    const handleClick = () => setAge(age + 1)
    const someValue = "someValue"
    const doSomething = () => {
      return someValue
    }
  
    return (
      <div>
        <Age age={age} handleClick={handleClick}/>
        <Instructions doSomething={doSomething} />
      </div>
    )
}

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}

const Instructions = memo((props) => {
  const colors = ['blue', 'red', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div style={{ background: 'black', color: randomColor, padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  )
})

render (
  <App />
)
`.trim()

const ReferencedFn = `
const App = () => {
  const [age, setAge] = useState(99)
  const handleClick = () => setAge(age + 1)
  const someValue = "someValue"
  const doSomething = useCallback(() => {
    return someValue
  }, [someValue])

  return (
    <div>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </div>
  )
}

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}

const Instructions = memo((props) => {
  const colors = ['blue', 'red', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div style={{ background: 'black', color: randomColor, padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  )
})

render(<App />)
`.trim()

const InlineFn = `
const App = () => {
  const [age, setAge] = useState(99)
  const handleClick = () => setAge(age + 1)
  const someValue = "someValue"

  return (
    <div>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={useCallback(() => {
        return someValue
      }, [someValue])} />
    </div>
  )
}

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}

const Instructions = memo((props) => {
  const colors = ['blue', 'red', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div style={{ background: 'black', color: randomColor, padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  )
})

render(<App />)
`.trim()

export { Starter, ReferencedFn, InlineFn }
