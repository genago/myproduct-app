// This navbar contains three buttons.

import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div style={{border: '1px dashed red', display: 'flex', justifyContent: 'space-around'}} >
        <Button />  
        <Button />  
        <Button />  
        </div>
    )
}

export default Navbar
