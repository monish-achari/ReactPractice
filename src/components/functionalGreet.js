import React from 'react';

export  function GreetF(props) {
    return <h4>Hello {props.movieName} movie {props.heroName}
    {props.children}
    
    </h4>
}


export const GreetFes = (props) => {
    return <h4>Hello {props.movieName} movie {props.heroName}
    {props.children}
    
    </h4>
}

const GreetFesf = (props) => {
    return <h4>Hello {props.movieName} movie {props.heroName}
    {props.children}
    
    </h4>
}

export default  GreetFesf;
