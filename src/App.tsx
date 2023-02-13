import { BsArrowRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import Tesseract from 'tesseract.js';
import './App.css'
import './styles.css'


function App() {
  const [url, setUrl] = useState('')



  function onImageChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setUrl(URL.createObjectURL(img))
    }
  }

  function convertToText(){

    if(!url){
      return;
    }
    Tesseract.recognize(
      url,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
    })
  }

  return (
    <div className="App">
      <div className='div1'>
        <input type="file" onChange={onImageChange} />
        <br></br>
        <div className='div-url'>{url && (
          <img className="fixed-size" src={url} alt="image" />
        )}</div>
      </div>
      <div className='div2'>

        <BsArrowRight size = '50'/>

        <button type='submit' onClick={event =>convertToText()}>Converter</button>

      </div>


      <div className='div3'>
        <textarea></textarea>
      </div>
  </div>
  )
}

export default App