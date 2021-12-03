import React, { useState } from "react";
import "./BurgerStyle.css";

export default function Burger() {
  let [lettuce, setLettuce] = useState(0);
  let [tomato, setTomato] = useState(0);
  let [cheese, setCheese] = useState(0);
  let [meat, setMeat] = useState(0);

  function addRemoveIngredient(action, ingredient) {
    const s = action === "add" ? 1 : -1;
    switch (ingredient) {
      case "lettuce": {
        setLettuce(Math.max(lettuce + s, 0));
        break;
      }
      case "tomato": {
        setTomato(Math.max(tomato + s, 0));
        break;
      }
      case "cheese": {
        setCheese(Math.max(cheese + s, 0));
        break;
      }
      case "meat": {
        setMeat(Math.max(meat + s, 0));
        break;
      }
      default:
        break;
    }
    // if (action === "add") {
    //   stateValue = stateValue + 1;
    // } else {
    //   stateValue = stateValue - 1;
    // }
    // this.setState({
    //   [ingredient]: stateValue >= 0 ? stateValue : 0,
    // });
  }

  function burgerContent() {
    let burger = [];

    // outputting the lettuce
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuseSide"></div>);
    }
    // outputting the tomato
    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }
    // outputting the cheese
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    // outputting the meat
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }
    if (burger.length === 0)
      burger.push(<p key="0">Please start adding ingredients!</p>);
    return burger;
  }
  return (
    <>
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
      <div className="ingredientsBlock">
        <p>Lettuce</p>
        <div className="ingrBtns">
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("add", "lettuce")}
          >
            Add
          </button>
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("remove", "lettuce")}
          >
            Remove
          </button>
        </div>
        <p>TOMATO</p>
        <div className="ingrBtns">
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("add", "tomato")}
          >
            Add
          </button>
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("remove", "tomato")}
          >
            Remove
          </button>
        </div>
        <p>CHEESE</p>
        <div className="ingrBtns">
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("add", "cheese")}
          >
            Add
          </button>
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("remove", "cheese")}
          >
            Remove
          </button>
        </div>
        <p>MEAT</p>
        <div className="ingrBtns">
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("add", "meat")}
          >
            Add
          </button>
          <button
            className="ingrBtn"
            onClick={() => addRemoveIngredient("remove", "meat")}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
