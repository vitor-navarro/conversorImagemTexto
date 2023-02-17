import React from 'react';
import ReactDom from 'react-dom';
import Button  from '../styledComponents';


interface UtilityBarProps{
    input: string;
    setInput: (text: string) => void;
}

function UtilityBar( { input, setInput } : UtilityBarProps){
    
    function handleCopy(){
        navigator.clipboard.writeText(input);
    }
    
    function downloadFile(){
        const text = input;
        const blob = new Blob([text], {type: 'text/plain'});

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'texto.txt';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    }

    return(
        <div>
            <button onClick={(event) => setInput('')}>limpar</button>
            <button onClick={(event) => handleCopy()}>copiar</button>
            <button onClick={(event) => downloadFile()}>download</button>
        </div>
    )
}

export default UtilityBar