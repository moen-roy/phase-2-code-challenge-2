import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GoalForm from './components/GoalForm'
import Goalchange from './components/GoalItem'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoalForm />
   {/* <Goalchange /> */}
  </StrictMode>,
)
