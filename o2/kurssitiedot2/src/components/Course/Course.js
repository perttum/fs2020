import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Total from '../Total/Total';

const course = (props) => {
    
    return(
        <div>
            {props.courses.map((course) => {
                return(
                    <div key={course.id}>
                        <Header course={course.name} />
                        <Content parts={course.parts}/>
                        <Total parts={course.parts}/>
                    </div>
                ) 
            })}
        </div>
    )
}

export default course;