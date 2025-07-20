# Goal Planner App

A simple React application for managing and tracking savings goals. Users can add, view, edit, and delete goals, with data persisted via a local JSON server.

## Features

- Add new savings goals with (name, target amount,   category, and deadline)
- View all goals with details including savings progress.
-Includes creation date and deadline for the goal
- Edit existing goals inline.
- Delete goals.
- Responsive and styled UI.

##  Tech Stack

- React (Frontend)
- JSON Server (Mock backend for API)
- CSS for styling
## Getting Started

### Project Structure
bash
Copy code
phase-2-code-challenge-2/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── GoalForm.js       # Form to add new goals
│   │   ├── GoalItem.js       # Displays goal details and delete
│   │   ├── GoalList.js       # Edit component (also handles updates)
│   │
│   ├── App.js                # no-content
│   ├── index.js              # Entry point
│   └── styles.css            # App styling
│
├── db.json                  # Mock API data
├── package.json

### Prerequisites

- Node.js (https://nodejs.org/) and npm installed
- [JSON Server](https://github.com/typicode/json-server) for local API

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd phase-2-code-challenge-2
   run npm install
2. Start the sever by runing 'npm run dev'
3. Start the backend (db.json)by runing:
      npm install -g json-server
        -to install globally the server
    then run:
     json-server --watch db.json --port 3001 npm run dev
# note
 -Both front-end and backend severs mus be running 
 -Page reloads (window.location.reload()) are currently used after edits; future versions can use state updates for smoother UX
  
# Feedback
Contributions, feedback, or suggestions are welcome. Open an issue or submit a pull request.
# License
This project is licensed under the MIT License.