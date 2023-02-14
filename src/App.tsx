import { BsArrowRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import Tesseract from 'tesseract.js';
import './App.css'
import './styles.css'
import { Container, Quadrado, ActionWrapper, Seta } from './styledComponents';


function App() {
  const [url, setUrl] = useState('')
  const [textConverted, settextConverted] = useState('')


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

    Tesseract.recognize(
      url,
      getLanguage(),
    ).then(({ data: { text } }) => {
      settextConverted(text);
    })
  }

  return (
    <div className='app'>
      <div className='div1'>
        <input type="file" accept="image/*" onChange={onImageChange} />
        <br></br>
        <div className='div-url'>{url && (
          <img className="fixed-size-img" src={url} alt="image" />
        )}</div>
      </div>
      
      <div className='div2'>


        <button type='submit' onClick={event => convertToText()}>Converter</button>

      </div>


      <div className='div3'>
        <label className='label-titulo'>Texto:</label>
        <textarea value={textConverted}></textarea>
        </div>
    </div>
  )
}

export default App