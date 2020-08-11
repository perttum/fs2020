import React from 'react';

const addContactForm = (props) => {
    //console.log('props:', props);
    const style = {
        marginTop: 10,
        marginRight: 10
    }
    return(
        <form noValidate>
            <div>
                <p>name: <input required style={style} value={props.newName} onChange={props.onChangeName} /></p>
            
                <p>number: <input required style={style} value={props.newNumber} onChange={props.onChangeNumber}/></p>
            
                <button type="submit" onClick={props.onSubmit}>add</button>
            </div>
        </form>
    )
}

export default addContactForm;