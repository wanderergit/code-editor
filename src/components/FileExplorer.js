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

export default function FileExplorer() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <div className="page-wrap twilight">
      <div className="boxes">
        <div className="coding_area">
          <Editor
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
          <Editor
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
          <Editor
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
        </div>
        <LiveView code={`${html}<style>${css}</style><script>${js}</script>`}>
        </LiveView>
      </div>
    </div>
  )
}
