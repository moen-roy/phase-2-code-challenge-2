import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GoalForm from './components/GoalForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoalForm />
  </StrictMode>,
)
