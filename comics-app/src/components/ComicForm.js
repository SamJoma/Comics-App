import React,{ useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Button } from 'semantic-ui-react'

function ComicForm({onAddComic}){
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const[publisher, setPublisher]=useState("")
    const[publisherArr, setPublisherArr]=useState([])
    const [hideForm, setHideForm] = useState(false)
   
    useEffect(() => {
      fetch('http://localhost:9292/publishers')
      .then(res=>res.json())
      .then(data =>setPublisherArr(data))
    
    },[])
     let history = useHistory();
    function handleSubmit(e) {
      e.preventDefault()
      fetch('http://localhost:9292/characters', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image:  image,
        publisher_id: publisher
      }),
    })
      .then((r) => r.json())
      .then((newComic) => onAddComic(newComic));
        history.push("/")
  }     
  

  const pubOptions = publisherArr.map((pub) => 
  <option value={pub.id}>{pub.publisher}</option>
  )

  
  
  return (
    <>
    {!hideForm &&
    <form onSubmit = {handleSubmit} >
      
    <div className="new-comic-form">
        <input
          label="comic"
          type="text"
          name="name"
          placeholder="Comic name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          label="image URL"
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <select onChange={(e) => setPublisher(e.target.value)}>
       {pubOptions} 
        </select>

        <button type="submit">Add a Comic</button>

      
    </div>
    </form> }
    </>
  );
}



export default ComicForm;
