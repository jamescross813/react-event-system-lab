// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{


    handleKeyDown = (event) => {
        console.log('Entering password...')
    }

    render(){
        return(
            <input type="password" 
            onKeyUp={this.handleKeyDown} />
        )
    }
}

export default Keypad