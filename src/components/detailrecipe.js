import React, { useState } from "react";

import './main.css';
import { useLocation } from 'react-router-dom';


const Detailrecipe = () => {

  const location = useLocation();

  // console.log(location.state.data.recipe)
  const recipe = useState(location.state.data.recipe)
  console.log(recipe)

  const myInlineStyle = {
    color: 'White',
    fontSize: '32px',
  };

  const f1 = {

    width: "25rem",

  };

  const back_img = {

    backgroundimage: `url(${recipe[0].image})`,

  };
  //<p>{location.state.data.recipe.calories}</p>
  return (
    <>
      <center>
        <div class="card" style={f1}>
          <img src={recipe[0].image} class="card-img-top" alt="..." />
          <div class="card-header">
            <h5 class="card-title">{recipe[0].label}</h5>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col">
                <h6 class="card-subtitle mb-2 text-muted">Ingredients:</h6>
                <ul class="list-group">
                  {recipe[0].ingredients.map((ingrident) => {
                    return (
                      <>
                        <li class="list-group-item">{ingrident.text}</li>
                      </>
                    )
                  })}
                </ul>
              </div>
              <div className="col">
                <h6 class="card-subtitle mb-2 text-muted">DistType:</h6>
                <p>{recipe[0].dishType}</p>

                <h6 class="card-subtitle mb-2 text-muted">DietType:</h6>
                <p>{recipe[0].dietLabels}</p>

                <h6 class="card-subtitle mb-2 text-muted">CuisineType:</h6>
                <p>{recipe[0].cuisineType}</p>

                <h6 class="card-subtitle mb-2 text-muted">MealType:</h6>
                <p>{recipe[0].mealType}</p>

                <h6 class="card-subtitle mb-2 text-muted">TotalTime Taken:</h6>
                <p>{recipe[0].totalTime}</p>

                <h6 class="card-subtitle mb-2 text-muted">Calories:</h6>
                <p>{recipe[0].totalWeight}</p>

              <a src ="http://localhost:3000/" className="btn btn-danger">Back</a>
              </div>

            </div>
            {/* <div className="col">
              <h6 class="card-subtitle mt-3 mb-2 text-muted">Instructions:</h6>
              <p class="card-text">Step 1: Lorem ipsum dolor sit amet...</p>
              <p class="card-text">Step 2: Lorem ipsum dolor sit amet...</p>
              </div> */}

            {/* <div className="col">
              <h6 class="card-subtitle mt-3 mb-2 text-muted">Nutritional Information:</h6>
              <p class="card-text">Calories: XXX</p>
              <p class="card-text">Protein: XXX g</p>
              <p class="card-text">Carbohydrates: XXX g</p>
              <p class="card-text">Fat: XXX g</p>
              </div> */}

          </div>
        </div>
      </center>
      {/* <center>
        <div class="card" style={f1}>
          <img src={recipe[0].image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{recipe[0].label}</h5>
            <div className="row">
              <div className="col">
                Ingridents :-
                {recipe[0].ingredients.map((ingrident) => {
                  return (
                    <>
                      <div>
                        {ingrident.text}
                      </div>
                    </>
                  )
                })
                }
              </div>


            </div>


          </div>
        </div>

      </center> */}

    </>
  )



}

export default Detailrecipe;