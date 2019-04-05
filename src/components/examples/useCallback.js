const StarterExample = `
const App = () => {
    const [age, setAge] = useState(99)
    const handleClick = () => setAge(age + 1)
  
    return (
      <div>
        <Age age={age} />
        <Instructions handleClick={handleClick} />
      </div>
    )
}

const Age = ({ age }) => {
  return (
    <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
      Today I am {age} Years of Age
    </div>
  )
}

const Instructions = ({ handleClick }) => {
  return (
    <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
      <p>Follow these instructions as closely as possible:</p>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}

render (
  <App />
)
`.trim()

export { StarterExample }
