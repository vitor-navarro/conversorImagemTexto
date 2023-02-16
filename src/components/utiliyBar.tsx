import React from 'react';
import ReactDom from 'react-dom';

interface UtilityBarProps{
    set: (text: string) => void;
}

function UtilityBar({ set } : UtilityBarProps){
    return(
        <button onClick={(event) => set('') }>limpar</button>
    );

}

export default UtilityBar