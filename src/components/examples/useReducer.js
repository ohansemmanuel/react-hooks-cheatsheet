const BasicExample = `const initialState = { width: 15 }
const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return { width: state.width + 15 }
    case 'minus':
      return { width: Math.max(state.width - 15, 2) }
    default:
      throw new Error("what's going on?" )
  }
}

const Bar = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <>
    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{marginTop: '3rem'}}>
        <button onClick={() => dispatch('plus')}>Increase bar size</button>
        <button onClick={() => dispatch('minus')}>Decrease bar size</button>
    </div>
    </>
}
render(Bar)`

const InitLazy = `
const initializeState = () => ({
  width: 100
})
// ✅note how the value returned from the fn overrides initialState
const initialState = { width: 15 }
const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return { width: state.width + 15 }
    case 'minus':
      return { width: Math.max(state.width - 15, 2) }
    default:
      throw new Error("what's going on?" )
  }
}

const Bar = () => {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState)
  return <>
    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{marginTop: '3rem'}}>
        <button onClick={() => dispatch('plus')}>Increase bar size</button>
        <button onClick={() => dispatch('minus')}>Decrease bar size</button>
    </div>
    </>
}
render(Bar)`

const ImitateSetState = `
const initialState = { width: 15 }
const reducer = (state, newState) => ({
  ...state,
  width: newState.width
})

const Bar = () => {
  const [state, setState] = useReducer(reducer, initialState)
  return <>
    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{marginTop: '3rem'}}>
        <button onClick={() => setState({width: 100})}>Increase bar size</button>
        <button onClick={() => setState({width: 3})}>Decrease bar size</button>
    </div>
    </>
}
render(Bar)`

export { BasicExample, InitLazy, ImitateSetState }
