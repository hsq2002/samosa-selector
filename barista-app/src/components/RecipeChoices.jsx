import React, { Component, useEffect, useState } from "react";


const RecipeChoices = ({ handleChange, label, choices, currentVal }) => {

    return (
      <div>
        <div className="radio-buttons">
          {/* FOR THE STRETCH GOAL: UNCOMMENT BELOW IF TESTING FOR STRETCH */}
          <input
            type="text"
            name={label}
            value={currentVal}
            placeholder="Guess the ingredient..."
            onChange={handleChange}
            className = "textbox"
          />
          {choices &&
            choices.map((choice) => (
              <li key={choice}>

                {choice}
              </li>
            ))}
        </div>
      </div>
    );

};

export default RecipeChoices;
