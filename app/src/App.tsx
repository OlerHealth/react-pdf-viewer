import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Viewer } from '@react-pdf-viewer/core'
import { Worker } from '@react-pdf-viewer/core';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Worker workerUrl ='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs'>  */}
      <Worker workerUrl ="/src/pdfjs/pdf.worker.min.mjs"> 
      <Viewer fileUrl='https://www.clickdimensions.com/links/TestPDFfile.pdf'/>
      </Worker>
    </div>
  )
}

export default App
