import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CharacterList from './componets/app'
import "./styles.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
<CharacterList></CharacterList>
  </StrictMode>,
)
