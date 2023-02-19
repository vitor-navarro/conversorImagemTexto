import React from 'react';
import {Button}  from '../styledComponents';
import { AiOutlineCloseCircle,AiOutlineDownload } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';

interface UtilityBarProps {
    input: string;
    setInput: (text: string) => void;
    setPopupActive: (active: boolean) => void;
    popupActive: boolean;
  }

function UtilityBar( { input, setInput, setPopupActive,popupActive } : UtilityBarProps){
    
    function handleCopy() {
        navigator.clipboard.writeText(input);
        setPopupActive(true)
        setTimeout(() => {
            setPopupActive(false)
        }, 2000);
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
            <Button onClick={(event) => setInput('')}>
                <AiOutlineCloseCircle  size= '20px'>

                </AiOutlineCloseCircle>
            </Button>
            <Button onClick={(event) => handleCopy()}>
                <BiCopy size= '20px'>

                </BiCopy>
            </Button>
            <Button onClick={(event) => downloadFile()}>
                <AiOutlineDownload size='20px'>

                </AiOutlineDownload>
            </Button>
        </div>
    )
}

export default UtilityBar