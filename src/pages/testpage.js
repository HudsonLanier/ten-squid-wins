import * as React from 'react'
import { Link } from 'gatsby'

const Greeting = (props) => {
  return (
    <p>A squid fact: {props.fact}!</p>
  )
}

const TestPage = () => {
    return (
      <div>
      <h1>This is the test page</h1>
      <Link to="/">Back to Home</Link>
      <Greeting fact="Here is a squid fact"/>
      </div>
    )
  }

  export default TestPage