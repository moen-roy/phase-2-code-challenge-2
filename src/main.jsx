import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GoalForm from './components/GoalForm'
import GoalDelete from './components/GoalItem'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoalForm />
   <GoalDelete />
  </StrictMode>,
)
