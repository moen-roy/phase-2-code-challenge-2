import { useEffect, useState } from "react";

function GoalView() {
    const [goals, setGoals]= useState([]);

   useEffect(()=>{
        fetch("http://localhost:3001/goals")
    .then(res => res.json())
    .then((data) =>{ setGoals(data) })
    .catch((error) => console.error("Error fetching goals:", error));
  }, []);
    return(
        <div id= "dataView">
            <h1>Your goals!</h1>
            {goals.map((goal)=>{
               return (
                 <div key= {goal.id} id="dataView">
                   <ul>
                        <li>                                                   
                    <h3>{goal.name} </h3>                  
                    <p><span>You targeted:</span> {goal.targetAmount} </p>
                    <p><span>Your savings:</span> {goal.savedAmount} </p>
                    <p><span>It's in the category of:</span> {goal.category}</p>
                    <p><span>Your deadline is:</span> {goal.deadline}</p>
                    <p><span>It was created on:</span> {goal.createdAt}</p>
                    {/* <GoalEdit goalId= {goal.id} /> */}
                     </li>
                    </ul>
                </div>
               )
            }
            )}
        
        <div>
            <button id= "delete" onClick={finalDelete}>Delete</button>
        </div>
        </div>
    )
}
export default GoalView;
