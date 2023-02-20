import { BsArrowRight, BsFillArrowDownSquareFill } from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'
import { FcCheckmark } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import UtilityBar from './components/utiliyBar';
import Tesseract from 'tesseract.js';
import './App.css'
import './styles.css'

function App() {
  const [url, setUrl] = useState('')
  const [textConverted, setTextConverted] = useState('')
  const [isConverting, setIsConverting] = useState(false)
  const [popupActive, setPopupActive] = useState(false)

  function onImageChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setUrl(URL.createObjectURL(img))
    }
  }

  function getLanguage() {
    const languageMap: { [key: string]: string } = {
      "pt-BR": "por",
      "af-ZA": "afr",
      "am-ET": "amh",
      "ar-AE": "ara",
      "as-IN": "asm",
      "az-AZ": "aze",
      "az-AZ-Cyrl": "aze_cyrl",
      "be-BY": "bel",
      "bn-BD": "ben",
      "bo-CN": "bod",
      "bs-BA": "bos",
      "bg-BG": "bul",
      "ca-ES": "cat",
      "ceb-PH": "ceb",
      "cs-CZ": "ces",
      "zh-CN": "chi_sim",
      "zh-TW": "chi_tra",
      "chr-US": "chr",
      "cy-GB": "cym",
      "da-DK": "dan",
      "de-DE": "deu",
      "dz-BT": "dzo",
      "ell-GR": "ell",
      "en-US": "eng",
      "en-GB": "eng",
      "en-CA": "eng",
      "en-AU": "eng",
      "en-IN": "eng",
      "en-NZ": "eng",
      "en-ZA": "eng",
      "eo-EO": "epo",
      "et-EE": "est",
      "eu-ES": "eus",
      "fa-IR": "fas",
      "fi-FI": "fin",
      "fr-FR": "fra",
      "fr-CA": "fra",
      "fy-NL": "fry",
      "ga-IE": "gle",
      "gl-ES": "glg",
      "gv-IM": "glv",
      "grc-GR": "grc",
      "gu-IN": "guj",
      "ht-HT": "hat",
      "he-IL": "heb",
      "hi-IN": "hin",
      "hr-HR": "hrv",
      "hu-HU": "hun",
      "iu-CA": "iku",
      "id-ID": "ind",
      "is-IS": "isl",
      "it-IT": "ita",
      "it-CH": "ita",
      "ja-JP": "jpn",
      "jv-ID": "jav",
      "kn-IN": "kan",
      "ka-GE": "kat",
      "kaz-KZ": "kaz",
      "km-KH": "khm",
      "kir-KG": "kir",
      "ko-KR": "kor",
      "ku-TR": "kur",
      "lo-LA": "lao",
      "la-VA": "lat",
      "lv-LV": "lav",
      "li-NL": "lim",
      "lt-LT": "lit",
      "ml-IN": "mal",
      "mar-IN": "mar",
      "mk-MK": "mkd",
      "mt-MT": "mlt",
      "mi-NZ": "mri",
      "ms-MY": "msa",
      "my-MM": "mya",
      "ne-NP": "nep",
      "nl-NL": "nld",
      "nl-BE": "nld",
    };

    const browserLanguage = navigator.language;
    const tesseractLanguage = languageMap[browserLanguage] || "eng";
    console.log(tesseractLanguage)
    return tesseractLanguage
  }

  function convertToText() {

    if (!url) {
      return;
    }

    setIsConverting(true);

    Tesseract.recognize(
      url,
      getLanguage(),
    ).then(({ data: { text } }) => {
      setTextConverted(text);
      setIsConverting(false);
    })
  }

  return (

    <div className="App">

      <div className='header'>
        <h1>Imagem &rArr; Texto</h1>
      </div>
    <div className='divMae'>
    <div className='div1'>
      <input type="file" accept="image/*" onChange={onImageChange} />
      <br></br>
      <div className='div-url'>{url && (
        <img className="fixed-size-img" src={url} alt="image" />
      )}</div>
    </div>

    <div className='div2'>
        {isConverting ? (
          <AiOutlineLoading size='50' className='loading-icon'/>
        ) : (
          <>
          <BsArrowRight size='50' className='arrow arrow-right' />
          <BsFillArrowDownSquareFill size='50' className='arrow arrow-down' onClick={event => convertToText()} />
          </>)}

      <button type='submit' className="button-convert" onClick={event => convertToText()}>{isConverting ? 'Convertendo':'Converter'}</button>
    </div>

    <div className='div3'>
      <div className='inline-flex'>
        <label className='label-titulo'>Texto:</label>
        <UtilityBar input = {textConverted} setInput={setTextConverted} setPopupActive={setPopupActive} popupActive={popupActive} ></UtilityBar>
      </div>
      <textarea value={textConverted} onChange={(event) => setTextConverted(event.target.value)}></textarea>
    </div>

    {popupActive && (
      <div className="popup">
        <FcCheckmark></FcCheckmark>
        <p>texto copiado com sucesso</p>
      </div>
    )}
</div>
</div>
)}

export default App