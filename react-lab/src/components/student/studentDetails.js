import {useContext, useEffect, useRef, useState} from "react";
import {LanguageContext} from "../../App";

export function StudentDetails() {

  const { language, setLanguage } = useContext(LanguageContext);
  const ref = useRef();

  function handleOnChnage(e) {
    setLanguage(e.target.value)
  }

  useEffect(() => {
    ref.current.disabled = !(language === 'ES' || language === 'EN');
  },[language])

  function handleOnClick(e) {
    e.preventDefault();
    if(language ==='EN') {
      setLanguage('ES')
    } else if(language === 'ES') {
      setLanguage('EN')
    }
  }

  return (
    <div>
      Language {language}
      <input type='text' onChange={(e) => setLanguage(e.target.value)} value={language}/>
      <button ref={ref} onClick={handleOnClick}>Change Language</button>
    </div>
  );
}
