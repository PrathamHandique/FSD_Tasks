import "./App.css";
import { useState } from "react";

function App() {
  const [dish, setDish] = useState("");
  const [recipe1, setRecipe1] = useState("");
  const [recipe2, setRecipe2] = useState("");
  const [nature, setNature] = useState("");

  function addNewDish(ev) {
    ev.preventDefault();

    const url1 = "http://localhost:4000/paneer";
    const url2 = "http://localhost:4000/jalebi";

    const requestBody = {
      dish: dish,
      recipe1: recipe1,
      recipe2: recipe2,
      nature: nature,
    };

    // Sending to URL1
    if (dish.toLowerCase() === "paneer") {
      fetch(url1, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Paneer result", json);
        });
    }
    // Sending to URL2
    else if (dish.toLowerCase() === "jalebi") {
      fetch(url2, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Jalebi result", json);
        });
    } else {
      console.log("Invalid dish");
    }

    setDish("");
    setRecipe1("");
    setRecipe2("");
    setNature("");
  }

  return (
    <main>
      <h1 className="metal">Give your Recipe for Paneer and Jalebi</h1>
      <form onSubmit={addNewDish}>
        <div className="description">
          <input
            type="text"
            placeholder={"your dish"}
            value={dish}
            onChange={(ev) => setDish(ev.target.value)}
          />
        </div>
        <div className="basic">
          <input
            type="text"
            placeholder={"recipe1"}
            value={recipe1}
            onChange={(ev) => setRecipe1(ev.target.value)}
          />
          <input
            type="text"
            placeholder={"recipe2"}
            value={recipe2}
            onChange={(ev) => setRecipe2(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            placeholder={"nature sweet or spicy"}
            value={nature}
            onChange={(ev) => setNature(ev.target.value)}
          />
        </div>
        <button type="submit">Add your dish's recipe</button>
      </form>
    </main>
  );
}

export default App;
