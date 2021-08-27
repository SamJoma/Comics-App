import React,{useState} from "react";

function Comics({comic}) {
  // console.log(comic)
  const [showIntel, setShowIntel] = useState("false")
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/characters/${comic.id}`, {
      method: "DELETE"
    })
     
  }
  
  return (
      <li className="cards__item">
      <div className="card"> 
         <img
          src={comic.image}
          alt={comic.image}
          className="card__image"
           onClick={() => setShowIntel((prevSetShowIntel)=>!prevSetShowIntel)}
        /> 
       
        <div className="card__content">
        <button onClick={handleDeleteClick}>Delete</button>
          <div className="card__title"> {comic.name} </div>
          {showIntel ? 
             <p className="card__text"> 
             <strong>Info </strong>{comic.strength} {comic.slug}</p>
           :
          <div className="card__detail">
             <p className="connections"> <strong>Intelligence </strong> {comic.intelligence} </p> </div> } 
      </div>
     </div>
    </li>
  );
 }


export default Comics;
