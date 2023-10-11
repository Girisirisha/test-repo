import React from 'react'

const Hello =()=>{
    // return (
    //     <div className='dummyClass'>
    //         <h1>hello sirisha</h1>
    //     </div>
    // )

    // return React.createElement('div',null,'<h1>Hello siirsha</h1>') cant apply the h1 to the text below one is correct 

// rewrite componenet without using jsx for that createelement this methods excepts 3 methods
// 1.string 
// 2.parameter
// 3.children for div tag below

    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'jsx'))
}

export default Hello;