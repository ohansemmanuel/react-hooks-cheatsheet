import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
  }
`

const Wrapper = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

export default Wrapper
