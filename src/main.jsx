import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MyEditor} from "./MyEditor.jsx";
import {languageMap} from "prism-react-editor";
import {languages} from "prism-react-editor/prism";

console.log({languageMap, languages})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyEditor/>
  </StrictMode>,
)
