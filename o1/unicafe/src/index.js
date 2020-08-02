import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Handler for button clicks
  const handleClick = (rate) => {
    switch(rate){
      case 'good':
        //console.log('good');
        setGood(good + 1);
        break;
      case 'neutral':
        //console.log('neutral');
        setNeutral(neutral + 1);
        break;
      case 'bad':
        //console.log('bad');
        setBad(bad + 1);
        break;
      default: break;
    }
  }

  return (
    <div>
      <h1>Feed me feedback please!</h1>
      <Button 
        onClick={() => handleClick('good')}
        buttonText="Good"
      />
      <Button 
        onClick={() => handleClick('neutral')}
        buttonText="Neutral"
      />
      <Button 
        onClick={() => handleClick('bad')}
        buttonText="Bad"
      />

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />

    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.buttonText}
    </button>
  )
}

const Statistics = (props) => {
  
  const allRatesAmount = props.good + props.neutral + props.bad;
  const ratesAverage = ((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / allRatesAmount;
  
  if(!Number.isNaN(ratesAverage)){
    return(
      <div>
        <h3>Statistics</h3>
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good} />
              <StatisticLine text="neutral" value={props.neutral} />
              <StatisticLine text="good" value={props.bad} />
              <StatisticLine text="all" value={allRatesAmount} />
              <StatisticLine text="average" value={ratesAverage} />
            </tbody>
          </table>
      </div>
    )
  }

  return(
    <div>
      <h3>Statistics</h3>
      <p>
        No rates given yet.
      </p>
    </div> 
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>
        {props.text}:
      </td>
      <td>
        {props.value}
      </td>
    </tr>
       
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)