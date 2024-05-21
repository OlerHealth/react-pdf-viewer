import './App.css'
import { Viewer } from '@olerhealth/core';
import { Worker } from '@olerhealth/core';

// const workerUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs"
const workerUrl = "https://oler-public.storage.googleapis.com/vendored/cdnjs.cloudflare.com_ajax_libs_pdf.js_3.11.174_pdf.worker.min.js"

function App() {

  return (
    <div    style={{
      height: "70.75vh",
  }}
  >
      <Worker workerUrl={workerUrl}>
    <Viewer fileUrl="https://storage.googleapis.com/oler-public/1.pdf"/>
    </Worker>
    </div>
  )
}



export default App

