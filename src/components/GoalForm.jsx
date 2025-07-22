import { useState } from "react";
import GoalView from "./GoalItem";

function GoalForm(){
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

   function Insertion(){
        // Stop the program if any field is empty
        if (!name || !targetAmount || !category || !deadline) {
    alert("Please fill in all the fields before submitting.");
    return; 
  }
        const newGoal = {
      name,
      targetAmount,
      savingsAmount,
      category,
      deadline,
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    // fetching data from the json and adding a goal 
        fetch(`http://localhost:3001/goals`, {
      method: "POST",
      //enables the server to know data is bieng added to the json file
      headers: {
        "Content-Type": "application/json"
      },
       body: JSON.stringify(newGoal)
    })
        .then(()=>{
            alert("Successfull goal set");
        //refreshes the page once the data is submitted
            window.location.reload()        
    })
    // when the fatch fails, the error is displayed
    .catch((err)=> console.log("New goal set failure",err))
    };

     return(
        // this is a form for adding the new goal
        //once the button is clicked, the funtion commences
        <div>
            <div id= "goalForm">
             <div id= "goalName">
                <label>Your goal  </label>
                <input type="text" placeholder="Enter your goal here!" onChange={(e)=> setName(e.target.value)} />
            </div>
            <div id= "goalTarget">
                <label>Target Ammount </label>
                <input type="number" placeholder="Enter your target amount here!" onChange= {(e)=> setTargetAmount(e.target.value)} />
            </div>
            <div id= "goalSavings">
                <label>Savings Ammount </label>
                <input type="number" placeholder="Enter the amount to save today" onChange= {(e)=> setSavingsAmount(e.target.value)} />
            </div>
            <div id= "goalCategory">
                <label>Category </label>
                <input type="text" placeholder="Enter the category of your goal here!" onChange={(e)=> setCategory(e.target.value)} />
            </div>
            <div id= "goalDeadline">
                <label>Deadline of the target </label>
                <input type="text" placeholder="sample: 2023-12-31" onChange={(e)=> setDeadline(e.target.value)} />                
            </div>            
              <button id="goalButton" onClick={Insertion} >Add +</button>
        </div>           
        </div>
        
        
       
    )
}


export default GoalForm;