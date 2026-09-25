import React,{useEffect, useState} from 'react'
import './note.scss'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({ windowName, setWindowsState }) => {
    const [markdown,setMarkdown] = useState(null)
    useEffect(()=>{
        fetch("/Note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    },[])
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className='note-window'>
            {markdown ? <SyntaxHighlighter  style={atelierDuneDark} language='typescript'>{markdown}</SyntaxHighlighter>: <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note
