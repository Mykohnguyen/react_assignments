import React from "react"

const validationComponent = (prop)=>{
    let message = ""
    if(prop.length < 5){
        message = "too short"
    }
    if(prop.length > 10){
        message="too long"
    }
    return(
        <div>
            <p> {prop.length}</p>
            <p> {message}</p>
        </div>
    )
}

export default validationComponent