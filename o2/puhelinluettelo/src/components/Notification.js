import React from 'react';

const notification = (props) => {
    console.log('noti props: ', props)
    const successStyle = {
        backgroundColor: "grey",
        border: "2px solid black",
        borderRadius: 10,
        color: "white",
        fontSize: "1.2em",
        textAlign: "center",
        marginBottom: "1.3em"
    }

    const errorStyle = {
        backgroundColor: "black",
        border: "2px solid red",
        borderRadius: 10,
        color: "red",
        fontSize: "1.2em",
        textAlign: "center",
        marginBottom: "1.3em"
    }
    
    if(props.message !== null){
        return(
            <div style={props.message[1] ? errorStyle : successStyle}>
                <p>
                    {props.message[0]}
                </p>
            </div>
        )
    } else{
        return null;
    }
    
}

export default notification;