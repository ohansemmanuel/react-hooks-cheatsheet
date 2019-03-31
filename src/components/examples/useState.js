const DeclareStateVar = `() => {
  const [count] = useState(100)
  return <div> State variable is {count}</div>
}`

const UpdateStateVar = `() => {
  const [age, setAge] = useState(19)
  const handleClick = () => setAge(age + 1)

  return (
    <div>
      Today I am {age} Years of Age
      <div>
        <button onClick={handleClick}>Get older! </button>
      </div>
    </div>
  )
}`

const MultipleStateVars = `() => {
  const [age, setAge] = useState(19)
  const [siblingsNum, setSiblingsNum] = 
    useState(10)

  const handleAge = () => setAge(age + 1)
  const handleSiblingsNum = () => 
      setSiblingsNum(siblingsNum + 1)
 

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleAge}>
          Get older! 
        </button>
        <button onClick={handleSiblingsNum}>
            More siblings! 
        </button>
      </div>
    </div>
  )
}`

const StateObject = `() => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 })
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
  const { age, siblingsNum } = state

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  )
}`

const StateFromFn = `() => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#"
  })

  return <div>Token is {token}</div>
}`

export {
  DeclareStateVar,
  UpdateStateVar,
  MultipleStateVars,
  StateObject,
  StateFromFn
}
