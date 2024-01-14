import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h1>statistics</h1>
      <p>
        good 6 <br />
        neutral 2 <br />
        bad 1 <br />
        all 9 <br />
        average {6/10.8} <br />
        positive {(6/9) * 100} %
      </p>
    </>
  )
}

export default App
