import { useState, useEffect } from "react"

function Edit({ goal }) {
  const [isEditing, setIsEditing] = useState(false);

//   store the updated input values.
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
  const [savingsAmount, setSavingsAmount] = useState(goal.savingstAmount);
  const [deadline, setDeadline]= useState(goal.deadline);
  function dataEdit() {
    setIsEditing(!isEditing); // Toggle edit mode
  }

  function handleUpdate() {
    // blocks submition of empty fields
    if (!name.trim() || !targetAmount||!savingsAmount|| !deadline) {
      alert("Please fill in all fields.");
      return;
    }
    // retrives data from the api and updates it
    fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: "PATCH",
    //   ensure the server knows there is update 
      headers: {
        "Content-Type": "application/json"
      },
    //   converts the json to an object
      body: JSON.stringify({
        name: name,
        targetAmount: targetAmount,
        savingsAmount: savingsAmount,
        deadline: deadline
      })
    })
    // reloads the page after an update
      .then(() => {
        alert("Goal updated successfully!");
        window.location.reload();
      })
    //   dispalys an error when fetch fails
      .catch((err) => console.log("Update failed", err));
  }

  return (
    // shows edit inputs only when isEditing is true
    <div>
      <button id="eddit" onClick={dataEdit}>
        {isEditing ? "Cancel" : "Edit"}
      </button>

      {isEditing && (
        <div  id="edditInput">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Goal name"
          />
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            placeholder="Target Amount"
          />
          <input
            type="number"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
            placeholder="savings Amount"
          />
          <input
            type="number"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            placeholder="Due date"
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Edit;
