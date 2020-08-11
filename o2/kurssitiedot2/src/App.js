import React from 'react';
import './App.css';
import Course from './components/Course/Course'

const App = () => {
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'To every action, there is a React',
        exercises: 82,
        id: 4
      }
    ]
    },
    {
      name: 'JS',
      id: 2,
      parts: [
        {
          name: 'Vanilla Ice',
          exercises: 50,
          id: 1
        },
        {
          name: 'How to cook pasta',
          exercises: 4,
          id: 2
        },
        {
          name: 'Way of the Ninja',
          exercises: 99,
          id: 3
        }
      ]
    },
    {
      name: 'Node',
      id: 3,
      parts: [
        {
          name: 'Hello World',
          exercises: 5,
          id: 1
        },
        {
          name: 'Routing',
          exercises: 10,
          id: 2
        }
      ]
    }
]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App;
