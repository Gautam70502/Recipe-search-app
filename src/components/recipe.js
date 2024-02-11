import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './main.css';


const Recipe = ({ search, Setsearch, isButtonClicked, SetisButtonClicked }) => {

    const navigate = useNavigate();
    
    

    let [recipes, Setrecipes] = useState([{}]);
    let [check, Setcheck] = useState(false);

  
    const fetchrecipes = async () => {

        const res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=c4a086eb&app_key=16fff25f4eec7b64705889aecb0343d8`, {

            method: "GET",
        })

        recipes = await res.json();
        Setrecipes(recipes);
        console.log(recipes);
        Setcheck(true);
        return;

    }



    // if(isButtonClicked === true)
    // {
    //     Setcheck(true);
    // }

    useEffect(() => {
        if (isButtonClicked === true) {
            fetchrecipes();
            SetisButtonClicked(false);
            Setcheck(false);


        }

    }, [isButtonClicked])

    //console.log(search+"here")
    console.log("isButtonClicked  " + isButtonClicked);
    console.log("check  " + check);

    return (
        <>
        {search==="" && (
            <>
            <i class="fas fa-hamburger"></i>
           
            </>
        )}
            {check && (
                <>
                    <div className="container mt-4">
                        <div className="row">
                            {recipes.hits.map((recipe) => {
                                return (
                                    <div className="col-lg-3 mt-4">
                                    <div class="card">
                                        <img src={recipe.recipe.image} class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                        <center><h5 class="card-title">{recipe.recipe.label}</h5>
                                            <p class="card-text">Calories : {Math.round(recipe.recipe.calories,0,0)}</p>
                                            <p class="card-text">DishType : {recipe.recipe.dishType[0]}</p>
                                            <button  onClick={()=>{ navigate("/detailrecipe",{state :{data:recipe}});}}  class="btn btn-outline-primary">View Detials</button></center>
                                        </div>
                                    </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </>

            )}


        </>
    )
}

export default Recipe;

