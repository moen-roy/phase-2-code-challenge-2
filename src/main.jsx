import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GoalForm from './components/GoalForm'
import GoalView from './components/GoalItem'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoalForm />
   <GoalView />
   
  </StrictMode>,
)
