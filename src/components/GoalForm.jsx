function GoalForm(){
    return(
        <div id= "goalForm">
             <div id= "goalName">
                <labele>Your goal  </labele>
                <input type="text" placeholder="Enter your goal here!" />
            </div>
            <div id= "goalTarget">
                <labele>Target Ammount </labele>
                <input type="number" placeholder="Enter your target amount here!" />
            </div>
            <div id= "goalCategory">
                <lable>Category </lable>
                <input type="text" placeholder="Enter the category of your goal here!" />
            </div>
            <div id= "goalDeadline">
                <label>Deadline of the target </label>
                <input type="text" placeholder="sample: 2023-12-31" />                
            </div>            
            <div >
                <button id="goalButton">Add +</button>
            </div>
        </div>
        
       
    )
}
export default GoalForm;