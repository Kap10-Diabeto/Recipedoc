import React from "react";
import "./Style.scss";
import Start from "./Start.js";
import Drop from "./Drop.jsx";
import logo from './RecipeDoc.png'
import RecipeBlock from "./Recipe-block";
import RecipeBrowse from "./BrowsePage";
import Rform from "./RecipeInput";
import RecipeSite from "./RecipeSite";


export default  function Meny(props){
    function onLinkClick(id){
        props.onNavigate(id);
    }

    return(
       
        <>
        <div className="MenuContainer">

        
        

        {/* <button className="btn btn1">About</button>
        <button className="btn btn2">Contact</button> */}
        <nav>
        <img class="RecipeDoc" onClick={() => onLinkClick(1)} src={logo} alt="RecipeDoc"/> 
            <div className="toggle">
                <span>Menu</span>
                </div>
            <ul>
                <li><a onClick={() => onLinkClick(1)}>Browse</a></li>
                <li><a onClick={() => onLinkClick(2)}>Register</a></li>
                <li><a onClick={() => onLinkClick(3)}>Log In</a></li>
                <li><a onClick={() => onLinkClick(4)}>Account</a></li>
            </ul>
        </nav>

        </div>

        </>
    )

}



    export function App(props){
        const [currentPage, setCurrentPage] = React.useState(null);

         function navigate(id){
            console.log(`Navigate: ${id}`)
            setCurrentPage(id);
        }

        let currentContent = null;
        
        if(currentPage === 1)
        currentContent = <RecipeBrowse onNavigate={navigate}/>

        else if (currentPage === 2)
        currentContent = <Rform />

        else if (currentPage === 3)
        currentContent = <p>Under construction #2</p>

        else if (currentPage === 4)
        currentContent = <RecipeSite />

        return ( 
        <div className="app">
            <Meny onNavigate={navigate} />
            <div className="guistate-content">
                {currentContent}
            </div>
        </div>)
    }

    
