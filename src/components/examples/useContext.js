const ContextConsumerExample = `
const ThemeContext = React.createContext('light')

const Display = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          style={{
            background: theme === 'dark' ? 'black' : 'papayawhip',
            color: theme === 'dark' ? 'white' : 'palevioletred',
            width: '100%',
            minHeight: '200px'
          }}
        >
          {'The theme here is ' + theme}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
render(Display)`

const useContextDisplay = `
const ThemeContext = React.createContext('light');

const Display = () => {
 const theme = useContext(ThemeContext);
 return <div
        style={{
        background: theme === 'dark' ? 'black' : 'papayawhip',
        color: theme === 'dark' ? 'white' : 'palevioletred',
        width: '100%',
        minHeight: '200px'
        }}
    >
        {'The theme here is ' + theme}
    </div>
}
render(Display)`

export { ContextConsumerExample, useContextDisplay }
