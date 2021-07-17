import React, { useState } from 'react'
import LiveView from './LiveView';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './prism.css';

require('prismjs/components/prism-jsx');
require('prismjs/components/prism-css');

/*
  This component displays the code editors, maintains their state and passes it on
  the LiveView iframe component
*/
export default function FileExplorer() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [screenHtml, setScreenHtml] = useState(true)
  const [screenCss, setScreenCss] = useState(false)
  const [screenJs, setScreenJs] = useState(false)
  const [screenShare, setScreenShare] = useState(false)
  const [url, setUrl] = useState('')

  const createPaste = async () => {
    const item = {
      "code": `${html}<style>${css}</style><script>${js}</script>`
    }
    await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(function (response) {
        return response.json();
      })
      .then(data => setUrl(data.url));
  }

  const toggleScreens = (screen) => {
    if (screen === 'html') {
      setScreenHtml(true)
      setScreenCss(false)
      setScreenJs(false)
      setScreenShare(false)
    } else if (screen === 'css') {
      setScreenHtml(false)
      setScreenCss(true)
      setScreenJs(false)
      setScreenShare(false)
    } else if (screen === 'js') {
      setScreenHtml(false)
      setScreenCss(false)
      setScreenJs(true)
      setScreenShare(false)
    } else if (screen === 'all') {
      setScreenHtml(true)
      setScreenCss(true)
      setScreenJs(true)
      setScreenShare(false)
    } else if (screen === 'share') {
      setScreenHtml(false)
      setScreenCss(false)
      setScreenJs(false)
      setScreenShare(true)
    }
  }

  return (
    <div className="page-wrap twilight">
      <div className="boxes">
        <div className="coding_area">
          <div className="prism-min">
            <span className="prism-head">File Explorer</span>
            <div onClick={() => toggleScreens('html')}>index.html</div>
            <div onClick={() => toggleScreens('css')}>app.css</div>
            <div onClick={() => toggleScreens('js')} >index.js</div>
            <div onClick={() => toggleScreens('all')} >All files</div>
            <span className="prism-head">Share</span>
            <div onClick={() => {
              toggleScreens('share')
              createPaste()
            }} >Get Link</div>
          </div>
          {
            screenHtml && <Editor
              placeholder="HTML"
              value={html}
              onValueChange={code => setHtml(code)}
              highlight={code => highlight(code, languages.jsx)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                color: 'white',
                backgroundColor: '#333234'
              }}
              className="prism"
            />
          }
          {
            screenCss && <Editor
              placeholder="CSS"
              value={css}
              onValueChange={code => setCss(code)}
              highlight={code => highlight(code, languages.css)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                color: 'white',
                backgroundColor: '#333234'
              }}
              className="prism"
            />
          }
          {
            screenJs && <Editor
              placeholder="JS"
              value={js}
              onValueChange={code => setJs(code)}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                color: 'white',
                backgroundColor: '#333234'
              }}
              className="prism"
            />
          }

          {
            screenShare && <div className="prism">
              {url}
            </div>
          }

        </div>
        <LiveView code={`${html}<style>${css}</style><script>${js}</script>`}>
        </LiveView>
      </div>
    </div>
  )
}
