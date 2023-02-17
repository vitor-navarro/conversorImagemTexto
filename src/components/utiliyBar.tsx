import React from 'react';
import ReactDom from 'react-dom';

interface UtilityBarProps{
    input: string;
    setInput: (text: string) => void;
}

function UtilityBar( { input, setInput } : UtilityBarProps){
    
    

    return(
        <div>
            <button onClick={(event) => setInput('') }>limpar</button>
        </div>
    )
}

export default UtilityBar