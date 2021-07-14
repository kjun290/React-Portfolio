import React from 'react';

function Card (props) {
    return (
       <div className="card">
           <div className="img-container">
               <img alt={props.title} src={props.image} />
           </div>
           <div className="content">
               <ul>
                   <li>
                       Project: {props.title}
                   </li>
                   <li>
                       Github: {props.github}
                   </li>
                   <li>
                       Link: {props.url}
                   </li>
               </ul>
           </div>
       </div> 
    );
}

export default Card;