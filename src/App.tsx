import { useState, useEffect } from 'react'
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

  return (
    <div className="App">
    <div className='div1'>
      <input type="file" onChange={onImageChange} />
      <br></br>
      <div className='divTeste'>{url && (
        <img className="fixed-size" src={url} alt="image" />
      )}</div>
    </div>

    <div className='div2'>
      <textarea></textarea>
    </div>
  </div>
  )
}

export default App