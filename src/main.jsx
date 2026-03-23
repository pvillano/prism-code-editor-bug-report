import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MyEditor} from "./MyEditor.jsx";
import {languageMap} from "prism-react-editor";
import {languages} from "prism-react-editor/prism";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>languages entries</h2>
    <ul>
      {Object.keys(languages).map(language => <li key={language}>{language}</li>)}
    </ul>
    <h2>languageMap entries</h2>
    <ul>
      {Object.keys(languageMap).map(language => <li key={language}>{language}</li>)}
    </ul>
      <h2>Editor missing highlighting</h2>
    <MyEditor/>
  </StrictMode>,
)
