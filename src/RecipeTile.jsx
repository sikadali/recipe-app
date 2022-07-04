import React from 'react';
import './RecipeTile.css';
import ReactTooltip from 'react-tooltip';

export default function RecipeTile({recipe}) {  
    return (
        <div className="recipeTile" onClick={() => {
            window.open(recipe['recipe']['url']);
        }} data-tip = {"KCAL : " + recipe['recipe']['calories'].toFixed(2)} >
            <img alt="" 
                className="recipeTile__img" 
                src = {recipe['recipe']['image']} 
                
            />
            <p className="recipeTile__name" >
                {recipe['recipe']['label']}

            </p>
            <ReactTooltip className='tooltip-class' delayHide={500} place='bottom' effect='solid' globalEventOff="click" />
        </div>
    )
}
