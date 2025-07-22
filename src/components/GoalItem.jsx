import { useEffect, useState } from "react";
import Edit from './GoalList';

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
            <h1>Your set goals!</h1>
            {goals.map((goal)=>{
               return (
                 <div key= {goal.id} id="dataView">
                   <ul>
                        <li>                                                   
                    <h3>{goal.name} </h3>                  
                    <p><span>You targeted:</span> $ {goal.targetAmount.toLocaleString()} </p>
                    <p><span>Your savings:</span> $ {goal.savedAmount.toLocaleString()} </p>
                    <p><span>It's in the category of:</span> {goal.category}</p>
                    <p><span>Your deadline is:</span> {goal.deadline}</p>
                    <p><span>It was created on:</span> {goal.createdAt}</p>
                    <GoalDelete goalId= {goal.id} />

                    <Edit goal={goal} />
                     </li>
                    </ul>
                </div>
               )
            }
            )}
        </div>

    )
}
function GoalDelete({goalId}){
    function finalDelete(){
   fetch(`http://localhost:3001/goals/${goalId}`, {
      method: "DELETE",
    })
        .then(()=>{
            alert("Successfull delete");
            window.location.reload()        
    })
    .catch((err)=> console.log("Delete failure",err))
    }; 

    return(
        <div>
            <button id= "delete" onClick={finalDelete}>Delete</button>
        </div>
    );
}
export default GoalView;
