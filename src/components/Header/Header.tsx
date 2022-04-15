import React from 'react'
import { Container } from 'react-bootstrap'

type Header= {
    text: string
}

const Head = ({
 text
}: Header) => {
    return(
        <header>

        </header>
    )
}

const Header = () => {
  return (
    <header>
        <Container className='my-3 py-3 px-auto d-flex justify-content-center border border-primary rounded-3'>
          <h1>I really fucking love roxy</h1>
        </Container>
    </header>
  )
}

export default Header