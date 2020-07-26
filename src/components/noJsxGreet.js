import React from 'react';

export function GreetNoJsxf(props){
    // return(
    //     <h1>
    //         Hello World!!
    //     </h1>
    // )
    return(
        React.createElement(
            'h1',
            {id:"Hello",className:"HellOO"},
            props.name   
        )
    )
}



export function GreetNoJsx(props){
    return(
        <h1>
            {props.name}
        </h1>
    )
}
