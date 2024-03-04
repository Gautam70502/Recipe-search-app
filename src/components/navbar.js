import React, { useState } from "react";
import Recipe from "./recipe";
import './main.css';


const Navbar =() => {

    const [search,Setsearch] = useState("");
    let [isButtonClicked, SetisButtonClicked] = useState(false);
    // Setsearch(search);
    const myInlineStyle = {
        color: 'Red',
        fontSize: '32px',
        fontWeight: 'bold',
    };

    const myin = {

        fontSize:'30px'
    };

    const handleButtonClick = (event) => {

        const data = event.target.value;
        console.log(event.target.value)
        Setsearch(data);
        // console.log(search);
        
    
      };

    const isclicked = () => {

        SetisButtonClicked(true);
    }
    

  

    return (

        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                    <a className="navbar-brand" style={myInlineStyle} href="http://localhost:3000/">Recipezes</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/" >Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li>
                                <input className="form-control" type="text" placeholder="Search" onChange={handleButtonClick} />
                            </li>
                            <li>
                                <button onClick={isclicked} className="mt-1"><i style={myin} class="fa fa-search" ></i></button>
                            </li>
                           
                        </ul>
                        <span className="navbar-text">
                            
                            
                        </span>
                    </div>
                </nav>
            </div>

        <Recipe search={search} Setsearch={Setsearch} isButtonClicked = {isButtonClicked} SetisButtonClicked = {SetisButtonClicked} />
            
        </>
    )
}

export default Navbar;
