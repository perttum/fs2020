import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0));

  const randomButtonHandler = () => {
    const random = getNewRandomNumber(selected);
    //console.log(random);
    setSelected(random);
  }

  // Creates a new random number. Prevents returned value from being
  // the same value it was the last time.
  const getNewRandomNumber = (lastRandom) => {
    let random = Math.floor(Math.random() * props.anecdotes.length);
    while(random === lastRandom){
      random = Math.floor(Math.random() * props.anecdotes.length);
    }
    return random;
  }

  const voteButtonHandler = () => {
    //console.log("Voted!", selected);
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVote(newVotes);
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <p>
        <Button onClick={randomButtonHandler} text="Random wisdom" />
        <Button onClick={voteButtonHandler} text="Vote" />
      </p>
      <MostVoted votes={votes} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const MostVoted = (props) => {
  const mostVotedIndex = props.votes.indexOf(Math.max(...props.votes));
  console.log(mostVotedIndex);
  return(
    <div>
      <h3>Most voted wisdom:</h3>
      <p>
        {props.anecdotes[mostVotedIndex]}
      </p>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)