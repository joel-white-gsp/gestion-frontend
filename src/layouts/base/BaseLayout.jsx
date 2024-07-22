import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export default function BaseLayout({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
`
