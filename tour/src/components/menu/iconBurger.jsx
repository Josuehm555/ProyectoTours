import React from 'react'

export const IconBurger = ({menu,setMenu}) => {
    return (

        <div  onClick={()=>{setMenu(true) }} className="burgerButton">
            <div className="bar barTop"> </div>
            <div className="bar barCenter"></div>
            <div className="bar barBotton"> </div>
        </div>
    )
}
