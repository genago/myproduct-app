//this is the container displaying one of three components; professional, amateur, about. 
//must pass state and props from button.

import React from 'react'
import Professional from './Professional'
import Amateur from './Amateur'
import About from './About'


const Container = () => {

    
    return (
        <div style={{backgroundColor: 'lightslategrey'}}>
            container
            <Professional />
            <Amateur />
            <About />
        </div>
    )
}

export default Container

