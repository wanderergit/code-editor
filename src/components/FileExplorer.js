import React, { useState, useCallback, useEffect } from 'react'
import LiveView from './LiveView';

export default function FileExplorer() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  // const [userText, setUserText] = useState('');


  // useEffect(() => {
  //   window.addEventListener('keydown', handleUserKeyPress);
  //   return () => {
  //     window.removeEventListener('keydown', handleUserKeyPress);
  //   };
  // }, [handleUserKeyPress]);

  return (
    <div className="page-wrap twilight">
      <div className="boxes">
        <div className="coding_area">
          <textarea id="html" placeholder="HTML" className="prism-live language-html"
            value={html} onChange={e => setHtml(e.target.value)}></textarea>
          <textarea id="css" placeholder="CSS" className="prism-live language-css" value={css} onChange={e => setCss(e.target.value)}></textarea>
          <textarea id="js" placeholder="JS" className="prism-live language-js" value={js} onChange={e => setJs(e.target.value)}></textarea>
        </div>
        <LiveView code={`${html}<style>${css}</style><script>${js}</script>`}>
        </LiveView>
      </div>
    </div>
  )
}
