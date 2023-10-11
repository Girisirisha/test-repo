 import React from 'react'

//  function Greet(){
     
//     return <h1>Hello siri</h1>
//  }


// export const Greet=()=><h1>Hello siri</h1>  using jsx to get th output



const Greet = props=>{
    console.log(props)
    return (
        <div>
            <h1>hello {props.name}{props.heroName}</h1>

            {props.childhren}
        </div>
    )
}


 export default Greet;